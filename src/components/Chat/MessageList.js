// /components/Chat/MessageList.js
import React, { useEffect, useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MessageListContainer>
      <>
      {messages?.map((message, index) =>
        message.text_data.role === 'user' ? (
          <UserMessageContainer>
          <Message
            type="user"
            dangerouslySetInnerHTML={{ __html: message.text_data.content }}
          />
          <MessageIcon>👤</MessageIcon> {/* Иконка пользователя справа */}
          {message.rag_data && message.rag_data.length > 0 && (
            <>
              <button onClick={toggleExpand}>
                {isExpanded ? 'Скрыть подробности' : 'Показать подробности'}
              </button>
              {isExpanded && (
                <div className="rag-data">
                  {message.rag_data.map((item, index) => (
                    <p key={index}>{item.chunk_text}</p>
                  ))}
                </div>
              )}
            </>
          )}
        </UserMessageContainer>
      ) : (
        <BotMessageContainer>
          <MessageIcon>🤖</MessageIcon> {/* Иконка бота слева */}
          <Message
            type="assistant"
            dangerouslySetInnerHTML={{ __html: message.text_data.content }}
          />
          {message.rag_data && message.rag_data.length > 0 && (
            <>
              <button onClick={toggleExpand}>
                {isExpanded ? 'Скрыть подробности' : 'Показать подробности'}
              </button>
              {isExpanded && (
                <div className="rag-data">
                  {message.rag_data.map((item, index) => (
                    <p key={index}>{item.chunk_text}</p>
                  ))}
                </div>
              )}
            </>
          )}
        </BotMessageContainer>
        )
      )}
      </>
    </MessageListContainer>
  );
}

export default MessageList;
