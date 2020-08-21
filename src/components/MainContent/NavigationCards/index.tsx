import React from 'react';

import { Container, Card } from './styles';
import { cardsNavigation } from '../../../resources';

const NavigationCards: React.FC = () => {
  return (
    <Container>
      {Object.entries(cardsNavigation).map(([key, value]) => (
        <Card key={`card-${key}`}>
          <div>{value.icon}</div>
          {key}
        </Card>
      ))}
    </Container>
  );
};

export default NavigationCards;
