// /components/Header/AccuracyInfoComponent.js
import React from 'react';
import { styled } from '../../stitches.config';

const AccuracyInfoWrapper = styled('div', {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#e0e0e0',
  textAlign: 'center',
  fontSize: '1rem',
  color: '#333',
  fontWeight: 'bold',
  margin: '0 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '8px',
    fontSize: '0.9rem',
    gap: '5px',
  },
});

const AccuracyPercentage = styled('span', {
  fontSize: '1.8rem',
  color: '#000',
  fontWeight: 'bold',

  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
});

const AccuracyLabel = styled('span', {
  fontSize: '1.2rem',
  color: '#555',
  fontWeight: "500",

  '@media (max-width: 768px)': {
    fontSize: '0.8rem',
  },
});

function AccuracyInfoComponent({ accuracy }) {
  return (
    <AccuracyInfoWrapper>
      <AccuracyPercentage>{accuracy}</AccuracyPercentage>
      <AccuracyLabel>точность выбранной конфигурации</AccuracyLabel>
    </AccuracyInfoWrapper>
  );
}

export default AccuracyInfoComponent;
