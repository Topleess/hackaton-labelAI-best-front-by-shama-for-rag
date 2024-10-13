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
    const [ws, setWS] = useState(null);

    // Обработка отправки сообщения
    const handleSendMessage = async (messageText) => {
        if (typeof messageText === 'string' && messageText.trim()) {
            try {
                // Проверяем messages перед обновлением
                if (!Array.isArray(messages)) {
                    console.error('messages is not an array, initializing as empty array.');
                    setMessages([]); // Инициализируем как пустой массив, если это не так
                    return;
                }

                setMessages((prevMessages) => {
                    if (!Array.isArray(prevMessages)) {
                        console.error('prevMessages is not an array, initializing as empty array.');
                        return []; // Вернуть пустой массив, если prevMessages не массив
                    }

                    return [
                        ...prevMessages,
                        { text_data: { content: messageText, role: 'user' } },
                    ];
                });

                const response = await fetch(`${process.env.REACT_APP_HTTP_URL}/api/chat`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        session_id: ws,
                        context: [
                            ...messages,
                            { text_data: { content: messageText, role: 'user' } },
                        ],
                    }),
                });

                const data = await response.json();
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text_data: { content: '', role: 'assistant' }, rag_data: data.data },
                ]);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    useEffect(() => {
        const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}/ws/chat`);

        ws.onopen = () => {
            console.log('WebSocket соединение установлено');
        };

        ws.onmessage = (event) => {
            try {
                const botReply = JSON.parse(event.data);
                if (botReply.llm_message) {
                    if (botReply.llm_message === '<|endoftext|>') {
                        console.log('end');
                    } else {
                        setMessages((prevMessages) => {
                            if (!Array.isArray(prevMessages)) {
                                console.error('prevMessages is not an array, initializing as empty array.');
                                return []; // Вернуть пустой массив, если prevMessages не массив
                            }
                            const updatedMessages = [...prevMessages];
                            const lastBotMessageIndex = updatedMessages.findLastIndex(msg => msg.text_data.role === 'assistant');
                            
                            const newMessage = {
                                text_data: {
                                    role: 'assistant',
                                    content: botReply.llm_message
                                },
                            };
                    
                            if (lastBotMessageIndex !== -1) {
                                updatedMessages[lastBotMessageIndex].text_data.content += `${botReply.llm_message}`;
                            } else {
                                updatedMessages.push(newMessage);
                            }
                            return updatedMessages;
                        });
                    }
                } else if (botReply.session_id) {
                    setWS(botReply.session_id);
                }
            } catch (error) {
                console.error('Error handling WebSocket message:', error);
            }
        };

        ws.onclose = () => {
            console.log('WebSocket соединение закрыто');
        };

        ws.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <ChatContainer>
            {/* Боковая панель с историей чатов */}
            <HistoryWrapper>
                <ChatHistory
                    chats={chats}
                    // onSelectChat={handleSelectChat}
                    // onCreateChat={handleCreateChat}
                />
            </HistoryWrapper>

            {/* Основное окно чата */}
            <ChatContentWrapper>
                {/* onBotReply={handleBotReply}  */}
                <MessageList messages={messages} />
                <ChatInput setMessages={handleSendMessage} />
            </ChatContentWrapper>
        </ChatContainer>
    );
}

export default Chat;
