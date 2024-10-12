// /components/Header/UserMenu.js
import React from 'react';
import { styled } from '../../stitches.config';

const UserMenuWrapper = styled('div', {
  position: 'relative',
});

const UserButton = styled('button', {
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

const UserDropdown = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: '5px',
  backgroundColor: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  overflow: 'hidden',
  zIndex: 100,
});

const UserOption = styled('div', {
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

function UserMenu({ currentUser, onUserChange }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const users = ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'];

  const handleUserClick = (user) => {
    onUserChange(user);
    setIsOpen(false);
  };

  return (
    <UserMenuWrapper>
      <UserButton onClick={() => setIsOpen(!isOpen)}>
        {currentUser || 'Выберите пользователя'}
      </UserButton>
      {isOpen && (
        <UserDropdown>
          {users.map((user) => (
            <UserOption key={user} onClick={() => handleUserClick(user)}>
              {user}
            </UserOption>
          ))}
        </UserDropdown>
      )}
    </UserMenuWrapper>
  );
}

export default UserMenu;
