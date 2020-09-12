import React from 'react';

import { Container, Card, Navigation } from './styles';

import { cardsNavigation } from '../../../resources';
import Button from '../../Button';
import { FiArrowRight } from 'react-icons/fi';

import { DEFAULT_TRANSITION } from '../../../constants';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
      delay: 0.15,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

const NavigationCards: React.FC = () => {
  return (
    <Container variants={containerAnimation}>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <Card
            layout
            variants={cardsAnimation}
            transition={DEFAULT_TRANSITION}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            key={`card-${key}`}
          >
            <div>{value.icon}</div>
            {key}
          </Card>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  );
};

export default NavigationCards;
