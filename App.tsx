import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Login } from './src/Login';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}