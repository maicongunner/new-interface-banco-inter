import React from 'react';

import NavigationCards from './NavigationCards';
import AccountSummary from './AccountSummary';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
    </Container>
  );
};

export default MainContent;
