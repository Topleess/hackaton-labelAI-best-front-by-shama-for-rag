// /components/Chat/MessageList.js
import React, { useEffect } from 'react';
import { styled } from '../../stitches.config';

const MessageListContainer = styled('div', {
  flexGrow: 1,
  overflowY: 'auto',
  padding: '10px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: '40vh', // Установите высоту в относительных единицах (например, 40vh)
  width: '100%', // Сделайте ширину 100%, чтобы она соответствовала родительскому элементу
  margin: '0 auto',
});



// Контейнер для сообщений пользователя
const UserMessageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '10px',
});

// Контейнер для сообщений бота
const BotMessageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '10px',
});

// Сообщение (общий стиль)
const Message = styled('div', {
  padding: '10px',
  borderRadius: '5px',
  maxWidth: '60%',
  wordWrap: 'break-word',
  backgroundColor: (props) => (props.type === 'user' ? '#0070f3' : '#f1f1f1'),
  color: (props) => (props.type === 'user' ? 'white' : 'black'),
  whiteSpace: 'pre-wrap', // Обеспечиваем корректное отображение переносов строк
});

// Иконки сообщений
const MessageIcon = styled('div', {
  width: '30px',
  height: '30px',
  marginLeft: '10px', // Отступ для иконки пользователя
  marginRight: '10px', // Отступ для иконки бота
  borderRadius: '50%',
  backgroundColor: '#ccc', // Цвет фона иконки
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px', // Размер текста внутри иконки
  color: '#fff', // Цвет текста на иконке
});

// Компонент для отображения списка сообщений
function MessageList({ messages, onBotReply }) {

  return (
    <MessageListContainer>
      {messages.map((message, index) =>
        message.type === 'user' ? (
          <UserMessageContainer key={index}>
            <Message type="user" dangerouslySetInnerHTML={{ __html: message.text }} />
            <MessageIcon>👤</MessageIcon> {/* Иконка пользователя справа */}
          </UserMessageContainer>
        ) : (
          <BotMessageContainer key={index}>
            <MessageIcon>🤖</MessageIcon> {/* Иконка бота слева */}
            <Message type="bot" dangerouslySetInnerHTML={{ __html: message.text }} />
          </BotMessageContainer>
        )
      )}
    </MessageListContainer>
  );
}

export default MessageList;
