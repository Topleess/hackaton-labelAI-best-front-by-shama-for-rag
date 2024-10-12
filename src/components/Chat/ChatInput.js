// /components/Chat/ChatInput.js
import React, { useState, useRef } from 'react';
import { styled } from '../../stitches.config';

// Контейнер для поля ввода и кнопки отправки
const InputContainer = styled('div', {
  display: 'flex', // Поле ввода и кнопка расположены в строку
  alignItems: 'flex-end', // Выравнивание по нижнему краю
  justifyContent: 'center', // Выровнять поле ввода и кнопку по центру
  paddingBottom: '20px', // Отступ снизу, чтобы визуально поднять поле ввода вверх
  marginTop: 'auto', // Автоматический отступ сверху, чтобы поле располагалось выше в контейнере
});

// Поле ввода сообщения
const MessageInput = styled('textarea', {
  flexGrow: 0, // Поле ввода не растягивается автоматически, используется фиксированная ширина
  flexBasis: '50%', // Ширина поля ввода установлена на 50% от контейнера
  padding: '10px', // Внутренние отступы
  borderRadius: '5px', // Округление углов поля ввода
  border: '1px solid #ccc', // Граница поля ввода с цветом и толщиной
  marginRight: '10px', // Отступ между полем ввода и кнопкой отправки
  resize: 'none', // Отключаем ручную регулировку размера поля ввода
  height: '40px', // Начальная высота, которая соответствует высоте кнопки отправки
  lineHeight: '20px', // Высота строки — для удобного отображения текста с переносами
  overflowY: 'hidden', // Скрываем вертикальный скролл по умолчанию
  maxHeight: '150px', // Ограничение по максимальной высоте поля ввода
  boxSizing: 'border-box', // Включаем padding и border в итоговую ширину и высоту поля ввода
  '&:focus': {
    outline: 'none', // Убираем стандартную рамку при фокусе на поле ввода
  },
});

// Кнопка отправки сообщения
const SendButton = styled('button', {
  backgroundColor: '#0070f3', // Основной цвет кнопки
  color: 'white', // Цвет текста кнопки
  padding: '10px 20px', // Внутренние отступы
  borderRadius: '5px', // Округление углов кнопки
  border: 'none', // Убираем границу кнопки
  cursor: 'pointer', // Изменение вида курсора при наведении на кнопку
  height: '40px', // Высота кнопки, которая совпадает с высотой поля ввода
  '&:hover': {
    backgroundColor: '#005bb5', // Изменение цвета кнопки при наведении
  },
});

function ChatInput({ setMessages }) {
  const [inputValue, setInputValue] = useState(''); // Храним значение введенного текста в состоянии
  const inputRef = useRef(null); // Ссылка на элемент textarea для регулировки высоты

  // Обработка изменения значения в поле ввода
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Обновляем состояние с текущим значением поля ввода
    adjustTextareaHeight(); // Регулируем высоту текстового поля
  };

  // Регулировка высоты поля ввода
  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'; // Устанавливаем высоту на 'auto', чтобы сбросить текущее значение и пересчитать
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Устанавливаем высоту в зависимости от содержимого
      if (inputRef.current.scrollHeight > 150) {
        inputRef.current.style.overflowY = 'auto'; // Включаем прокрутку, если высота больше 150px
      } else {
        inputRef.current.style.overflowY = 'hidden'; // Скрываем прокрутку, если высота в пределах лимита
      }
    }
  };

  // Обработка нажатия клавиш (Enter и Shift + Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        e.preventDefault();
        setInputValue((prevValue) => prevValue + '\n');
        adjustTextareaHeight();
      } else {
        e.preventDefault();
        handleSend();
      }
    }
  };

  // Функция отправки сообщения
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages(inputValue); // Передаем строку сообщения в setMessages
      setInputValue(''); // Очищаем поле ввода после отправки сообщения
      if (inputRef.current) {
        inputRef.current.style.height = '40px'; // Возвращаем высоту текстового поля к минимальной
      }
    }
  };

  return (
    <InputContainer>
      <MessageInput
        ref={inputRef}
        rows="1"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Напишите сообщение..."
      />
      <SendButton onClick={handleSend}>Отправить</SendButton>
    </InputContainer>
  );
}

export default ChatInput;
