// /components/Chat/MessageList.js
import React from 'react';
import { styled } from '../../stitches.config';

const MessageListContainer = styled('div', {
  flexGrow: 1,
  overflowY: 'auto',
  padding: '10px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
});

const UserMessageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10px',
});

const BotMessageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '10px',
});

const Message = styled('div', {
  padding: '10px',
  borderRadius: '5px',
  maxWidth: '60%',
  wordWrap: 'break-word',
  backgroundColor: (props) => (props.type === 'user' ? '#0070f3' : '#f1f1f1'),
  color: (props) => (props.type === 'user' ? 'white' : 'black'),
});

function MessageList({ messages }) {
  return (
    <MessageListContainer>
      {messages.map((message, index) =>
        message.type === 'user' ? (
          <UserMessageContainer key={index}>
            <Message type="user">{message.text}</Message>
          </UserMessageContainer>
        ) : (
          <BotMessageContainer key={index}>
            <Message type="bot">{message.text}</Message>
          </BotMessageContainer>
        )
      )}
    </MessageListContainer>
  );
}

export default MessageList;
