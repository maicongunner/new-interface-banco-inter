import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence />
      <Dashboard />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
