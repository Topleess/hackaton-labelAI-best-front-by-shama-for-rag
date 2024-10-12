// stitches.config.js
import { createStitches } from '@stitches/react';

export const { styled, globalCss, theme } = createStitches({
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#1db954',
    },
    fonts: {
      body: 'system-ui, sans-serif',
    },
  },
});
