// /components/Chat/Chat.js
import React, { useState, useEffect } from 'react';
import { styled } from '../../stitches.config';
import ChatHistory from './ChatHistory';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatContainer = styled('div', {
    display: 'flex',
    width: '80%',
    height: '87vh', // Установите относительную высоту
    boxSizing: 'border-box',
  });
  

const HistoryWrapper = styled('div', {
  width: '25%',
  height: '100%',
  boxSizing: 'border-box',
  borderRight: '1px solid #ddd',
  overflowY: 'auto',
});

const ChatContentWrapper = styled('div', {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Используйте всю доступную высоту контейнера
    padding: '20px',
    boxSizing: 'border-box',
  });
  

// Основной компонент чата
function Chat() {
  const [messages, setMessages] = useState([]); // Состояние для сообщений
  const [chats, setChats] = useState([{ name: 'Чат 1' }, { name: 'Чат 2' }]);
  const [currentChat, setCurrentChat] = useState(chats[0]);

  // Обработка выбора чата
  const handleSelectChat = (chat) => {
    setCurrentChat(chat);
    setMessages([]); // Можно добавить логику загрузки сообщений конкретного чата
  };

  // Обработка создания нового чата
  const handleCreateChat = () => {
    const newChat = { name: `Чат ${chats.length + 1}` };
    setChats([...chats, newChat]);
    setCurrentChat(newChat);
    setMessages([]);
  };

// Callback для добавления ответа бота
const handleBotReply = (userMessage) => {
  setTimeout(() => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Ответ на: "${userMessage}" от бота`, type: 'bot' },
    ]);
  }, 1000); // Имитация задержки ответа бота
};

  // Обработка отправки сообщения
  const handleSendMessage = (messageText) => {
    if (typeof messageText === 'string' && messageText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, type: 'user' },
      ]);
      handleBotReply(messageText); // Автоматический ответ бота
    }
  };

  return (
    <ChatContainer>
      {/* Боковая панель с историей чатов */}
      <HistoryWrapper>
        <ChatHistory
          chats={chats}
          onSelectChat={handleSelectChat}
          onCreateChat={handleCreateChat}
        />
      </HistoryWrapper>

      {/* Основное окно чата */}
      <ChatContentWrapper>
        <MessageList messages={messages} onBotReply={handleBotReply} />
        <ChatInput setMessages={handleSendMessage} />
      </ChatContentWrapper>
    </ChatContainer>
  );
}

export default Chat;
