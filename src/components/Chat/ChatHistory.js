// /components/Chat/ChatHistory.js
import React from 'react';
import { styled } from '../../stitches.config';

const ChatHistoryContainer = styled('div', {
  width: '250px',
  height: '87vh', // Установите относительную высоту
  overflowY: 'auto',
  borderRight: '1px solid #ddd',
  padding: '10px',
  boxSizing: 'border-box',
});


const ChatItem = styled('div', {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
});

const NewChatButton = styled('button', {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  border: 'none',
  backgroundColor: '#0070f3',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#005bb5',
  },
});

function ChatHistory({ chats, onSelectChat, onCreateChat }) {
  return (
    <ChatHistoryContainer>
      {chats.map((chat, index) => (
        <ChatItem key={index} onClick={() => onSelectChat(chat)}>
          {chat.name}
        </ChatItem>
      ))}
      <NewChatButton onClick={onCreateChat}>Создать новый чат</NewChatButton>
    </ChatHistoryContainer>
  );
}

export default ChatHistory;
