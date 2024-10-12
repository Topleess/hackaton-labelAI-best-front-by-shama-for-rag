// /src/App.js

import React, { useState } from 'react';
import { styled } from './stitches.config';
import Header from './components/Header/Header';
import ChatHistory from './components/Chat/ChatHistory';
import ChatInput from './components/Chat/ChatInput';
import MessageList from './components/Chat/MessageList';

const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const MainContentContainer = styled('div', {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
});

const ChatContainer = styled('div', {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderLeft: '1px solid #ddd',
  boxSizing: 'border-box',
});

function App() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([{ name: 'Чат 1' }, { name: 'Чат 2' }]);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleCreateChat = () => {
    const newChatName = `Чат ${chats.length + 1}`;
    setChats([...chats, { name: newChatName }]);
    setSelectedChat({ name: newChatName });
    setMessages([]);
  };

  return (
    <AppContainer>
      <Header />
      <MainContentContainer>
        <ChatHistory
          chats={chats}
          onSelectChat={(chat) => {
            setSelectedChat(chat);
            setMessages([]); // Очистить сообщения при переключении чатов
          }}
          onCreateChat={handleCreateChat}
        />
        <ChatContainer>
          <MessageList messages={messages} />
          <ChatInput setMessages={setMessages} />
        </ChatContainer>
      </MainContentContainer>
    </AppContainer>
  );
}

export default App;
