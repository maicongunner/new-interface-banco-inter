import React from 'react';

import { Container, Card, Navigation } from './styles';

import { cardsNavigation } from '../../../resources';
import Button from '../../Button';
import { FiArrowRight } from 'react-icons/fi';

import { DEFAULT_TRANSITION } from '../../../constants';
import { useTheme } from 'styled-components';

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
      ...DEFAULT_TRANSITION,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

const NavigationCards: React.FC = () => {
  const { shadows } = useTheme();

  return (
    <Container variants={containerAnimation}>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <Card
            layout
            key={`card-${key}`}
            variants={cardsAnimation}
            transition={DEFAULT_TRANSITION}
            whileHover={{ y: -5, transition: DEFAULT_TRANSITION }}
            whileTap={{ y: 0, transition: DEFAULT_TRANSITION }}
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
