import React from 'react';
import { Container } from './styles';

const animation = {
  unMounted: { width: '0%' },
  mounted: {
    width: '100%',
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const Gradient: React.FC = () => {
  return (
    <Container
      layout
      variants={animation}
      initial="unMounted"
      animate="mounted"
    />
  );
};

export default Gradient;
