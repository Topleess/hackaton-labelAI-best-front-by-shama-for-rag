// /src/App.js

import React, { useState } from 'react';
import { styled } from './stitches.config';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat'; // Импорт нового компонента Chat

const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const MainContentContainer = styled('main', {
  display: 'flex',
  flexGrow: 1,
});

function App() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([{ name: 'Чат 1' }, { name: 'Чат 2' }]);
  const [selectedChat, setSelectedChat] = useState(chats[0]);

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
        <Chat
          chats={chats}
          setChats={setChats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          messages={messages}
          setMessages={setMessages}
          onCreateChat={handleCreateChat}
        />
      </MainContentContainer>
    </AppContainer>
  );
}

export default App;
