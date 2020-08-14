import React from 'react';

import { BancoInter } from '../../assets/images';
import { Container, Wrapper, LeftNav, RightNav } from './styles';

import Button from '../Button';
import Accountdropdown from './Accountdropdown';
import { User } from './Header';

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
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <Accountdropdown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Header;
