// /components/Header/Header.js
import React from 'react';
import { styled } from '../../stitches.config';
import AccuracyInfoComponent from './AccuracyInfoComponent'; // Импорт корректного компонента
import UserMenu from './UserMenu';
import SettingsButton from './SettingsButton'; // Убедись, что SettingsButton импортируется и используется

const HeaderWrapper = styled('header', {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
});

const LeftSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const RightSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const HeaderTitle = styled('h1', {
  fontSize: '1.5rem',
  color: '#000',
  margin: 0,
});

function Header({ accuracy, currentUser, onUserChange, onSettingsClick }) {
  return (
    <HeaderWrapper>
      <LeftSection>
        <HeaderTitle>Мой чат с ботом</HeaderTitle>
      </LeftSection>

      <RightSection>
        {/* Кнопка настройки */}
        <SettingsButton onClick={onSettingsClick} />

        {/* Компонент для отображения точности */}
        <AccuracyInfoComponent accuracy={accuracy} />

        {/* Компонент для выбора пользователя */}
        <UserMenu currentUser={currentUser} onUserChange={onUserChange} />
      </RightSection>
    </HeaderWrapper>
  );
}

export default Header;
