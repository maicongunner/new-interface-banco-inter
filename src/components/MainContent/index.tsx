import React from 'react';

import NavigationCards from './NavigationCards';
import AccountSummary from './AccountSummary';
import BankProducts from './BankProducts';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
      <BankProducts />
    </Container>
  );
};

export default MainContent;
