// /components/Header/Header.js
import React from 'react';
import { styled } from '../../stitches.config';
import AccuracyInfoComponent from './AccuracyInfoComponent';
import UserMenu from './UserMenu';
import SettingsButton from './SettingsButton';

const HeaderWrapper = styled('header', {
  backgroundColor: '#f9f9f9',
  padding: '10px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
});

const LeftSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const RightSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const HeaderTitle = styled('h1', {
  fontSize: '2rem',
  color: '#000',
  margin: 0,
  whiteSpace: 'nowrap',
});

function Header({ accuracy, currentUser, onUserChange, onSettingsClick }) {
  return (
    <HeaderWrapper>
      <LeftSection>
        <HeaderTitle>Q&A RZD</HeaderTitle>
        <AccuracyInfoComponent accuracy={accuracy || '0%'} />
      </LeftSection>

      <RightSection>
        <UserMenu currentUser={currentUser} onUserChange={onUserChange} />
        <SettingsButton onClick={onSettingsClick} />
      </RightSection>
    </HeaderWrapper>
  );
}

export default Header;