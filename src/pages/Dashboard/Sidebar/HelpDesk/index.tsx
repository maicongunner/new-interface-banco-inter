import React from 'react';

import { Container, HelpButton } from './styles';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';
import { FiArrowRight } from 'react-icons/fi';

const HelpDesk: React.FC = () => {
  return (
    <Container>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        Olá, Luke. <br /> Posso Ajudar?
      </span>
      <HelpButton>
        <FiArrowRight size={16} />
      </HelpButton>
    </Container>
  );
};

export default HelpDesk;
