// /components/Header/SettingsButton.js
import React, { useState } from 'react';
import { styled } from '../../stitches.config';
import SettingsModal from '../Modal/SettingsModal';

const Button = styled('button', {
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  padding: '14px 20px',
  cursor: 'pointer',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // Добавлен отступ между иконкой и текстом
  '&:hover': {
    backgroundColor: '#005bb5',
  },
});

const IconWrapper = styled('span', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
});

function SettingsButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <IconWrapper>⚙️</IconWrapper>
        Настройки
      </Button>
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default SettingsButton;