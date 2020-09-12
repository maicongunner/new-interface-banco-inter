import React from 'react';

import { BancoInter } from '../../assets/images';
import { Container, Wrapper, LeftNav, RightNav } from './styles';

import Button from '../Button';
import Accountdropdown from './Accountdropdown';
import { User } from './Header';
import Gradient from './Gradient';

const Header: React.FC = () => {
  const user: User = { name: 'Maicon Domingues' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button revision="secondary">Simulador Renda Fixa</Button>
          <Accountdropdown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
