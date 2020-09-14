import React from 'react';

import { BancoInter } from '../../assets/images';
import { Container, Wrapper, LeftNav, RightNav } from './styles';

import Button from '../Button';
import Accountdropdown from './Accountdropdown';
import { User } from './Header';
import Gradient from './Gradient';
import { DEFAULT_TRANSITION } from '../../constants';

const containerAnimation = {
  unMounted: {
    y: 0,
    opacity: 1,
  },
  mounted: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.8,
      ...DEFAULT_TRANSITION,
    },
  },
};

const navsAnimation = {
  unMounted: {
    y: -20,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      ...DEFAULT_TRANSITION,
    },
  },
};

const Header: React.FC = () => {
  const user: User = { name: 'Maicon Domingues' };

  return (
    <Container>
      <Wrapper
        variants={containerAnimation}
        initial="unMounted"
        animate="mounted"
      >
        <LeftNav variants={navsAnimation}>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav variants={navsAnimation}>
          <Button revision="secondary">Simulador Renda Fixa</Button>
          <Accountdropdown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
