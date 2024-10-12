// /components/Header/AccuracyInfo.js
import React from 'react';
import { styled } from '../../stitches.config'; // Исправляем путь к stitches.config
import AccuracyInfoComponent from './AccuracyInfoComponent'; // Убедитесь, что этот файл существует или скорректируйте путь

// Если AccuracyInfoComponent отсутствует, замените его содержимым, необходимым для отображения информации о точности
// Например:
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

function AccuracyInfo({ accuracy }) {
  return (
    <AccuracyInfoWrapper>
      Точность выбранной конфигурации: {accuracy}
    </AccuracyInfoWrapper>
  );
}

export default AccuracyInfo;
