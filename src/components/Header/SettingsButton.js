// /components/Header/SettingsButton.js
import React, { useState } from 'react';
import { styled } from '../../stitches.config';
import SettingsModal from '../Modal/SettingsModal';

const Button = styled('button', {
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#005bb5',
  },
});

function SettingsButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Настройки</Button>
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default SettingsButton;
