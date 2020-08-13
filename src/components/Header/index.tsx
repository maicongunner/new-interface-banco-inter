import React from 'react';

import { BancoInter } from '../../assets/images';
import { Container, Wrapper, LeftNav, RightNav } from './styles';

import Button from '../Button';
import Accountdropdown from '../Accountdropdown';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <Accountdropdown />
        </RightNav>
      </Wrapper>
    </Container>
  )
}

export default Header;
