import React from 'react';

import NavigationCards from './NavigationCards';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
    </Container>
  );
};

export default MainContent;
