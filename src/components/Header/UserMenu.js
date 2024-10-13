// /components/Header/UserMenu.js
import React, { useState } from 'react';
import { styled } from '../../stitches.config';
import UserProfileModal from '../Modal/UserProfileModal';

const UserMenuWrapper = styled('div', {
  position: 'relative',
});

const UserButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #d3d3d3',
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const UserAvatar = styled('div', {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: '#fff',
});

const UserDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

const UserName = styled('span', {
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

const UserRole = styled('span', {
  fontSize: '1rem',
  color: '#555',
});

const SettingsIcon = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  marginLeft: 'auto',
  '&:hover': {
    color: '#d42e12',
  },
});

const DropdownMenu = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: '5px',
  backgroundColor: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  overflow: 'hidden',
  zIndex: 100,
  width: '100%',
});

const UserOption = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const NewProfileButton = styled('div', {
  padding: '10px',
  cursor: 'pointer',
  fontWeight: 'bold',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

function UserMenu({ currentUser, onUserChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({ name: 'Иван П.', role: 'Руководитель проекта' });

  const users = [
    { name: 'Иван П.', role: 'Руководитель проекта' },
    { name: 'Алексей К.', role: 'Менеджер отдела продаж' },
  ];

  const handleUserClick = (user) => {
    onUserChange(user);
    setSelectedProfile(user);
    setIsDropdownOpen(false);
  };

  const handleSettingsClick = (user) => {
    setSelectedProfile(user);
    setIsProfileModalOpen(true);
  };

  const handleNewProfileClick = () => {
    setSelectedProfile(null);
    setIsProfileModalOpen(true);
  };

  return (
    <UserMenuWrapper>
      <UserButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <UserAvatar>
          👨‍💼
        </UserAvatar>
        <UserDetails>
          <UserName>{selectedProfile?.name || 'Выберите пользователя'}</UserName>
          <UserRole>{selectedProfile?.role || '—'}</UserRole>
        </UserDetails>
        <SettingsIcon onClick={(e) => { e.stopPropagation(); handleSettingsClick(selectedProfile); }}>
          ⚙️
        </SettingsIcon>
      </UserButton>

      {isDropdownOpen && (
        <DropdownMenu>
          {users.map((user) => (
            <UserOption key={user.name} onClick={() => handleUserClick(user)}>
              <UserAvatar>
                👨‍💼
              </UserAvatar>
              <UserDetails>
                <UserName>{user.name}</UserName>
                <UserRole>{user.role}</UserRole>
              </UserDetails>
              <SettingsIcon onClick={(e) => { e.stopPropagation(); handleSettingsClick(user); }}>
                ⚙️
              </SettingsIcon>
            </UserOption>
          ))}
          <NewProfileButton onClick={handleNewProfileClick}>
            + Создать новый профиль
          </NewProfileButton>
        </DropdownMenu>
      )}

      {isProfileModalOpen && (
        <UserProfileModal
          profile={selectedProfile}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}
    </UserMenuWrapper>
  );
}

export default UserMenu;