import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World 2!</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
