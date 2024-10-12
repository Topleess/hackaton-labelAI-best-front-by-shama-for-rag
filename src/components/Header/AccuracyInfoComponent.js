// /components/Header/AccuracyInfoComponent.js
import React from 'react';
import { styled } from '../../stitches.config';

const AccuracyInfoWrapper = styled('div', {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
  fontSize: '1rem',
  color: '#333',
  fontWeight: 'bold',
  margin: '0 10px',
  maxWidth: '200px',
});

function AccuracyInfoComponent({ accuracy }) {
  return (
    <AccuracyInfoWrapper>
      Точность выбранной конфигурации: {accuracy}
    </AccuracyInfoWrapper>
  );
}

export default AccuracyInfoComponent;