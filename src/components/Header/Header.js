// /components/Header/Header.js
import React from 'react';
import { styled } from '../../stitches.config';
import AccuracyInfo from './AccuracyInfo';
import SettingsButton from './SettingsButton';
import UserMenu from './UserMenu';

// Основной контейнер для Header
const HeaderContainer = styled('header', {
  width: '100%',
  padding: '15px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
});

function Header() {
  return (
    <HeaderContainer>
      {/* Компонент для отображения информации о точности */}
      <AccuracyInfo />
      {/* Компонент для открытия настроек */}
      <SettingsButton />
      {/* Выпадающее меню для выбора пользователя */}
      <UserMenu />
    </HeaderContainer>
  );
}

export default Header;

