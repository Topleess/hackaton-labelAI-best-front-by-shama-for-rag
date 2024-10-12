// /components/Chat/ChatInput.js
import React, { useState } from 'react';
import { styled } from '../../stitches.config';

const InputContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  padding: '10px',
  borderTop: '1px solid #ddd',
  boxSizing: 'border-box',
});

const MessageInput = styled('textarea', {
  flexGrow: 1,
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '10px',
  resize: 'none',
  minHeight: '40px',
  maxHeight: '150px',
  overflowY: 'auto',
});

const SendButton = styled('button', {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#005bb5',
  },
});

function ChatInput({ setMessages }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: inputValue, type: 'user' },
        { text: 'Это ответ от бота', type: 'bot' },
      ]);
      setInputValue('');
    }
  };

  return (
    <InputContainer>
      <MessageInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите сообщение"
      />
      <SendButton onClick={handleSend}>Отправить</SendButton>
    </InputContainer>
  );
}

export default ChatInput;
