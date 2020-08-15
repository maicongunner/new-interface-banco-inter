import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Gradient from './components/Gradient';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gradient />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
