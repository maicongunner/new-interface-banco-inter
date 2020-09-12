import React from 'react';

import { Container, HelpButton } from './styles';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';
import { FiArrowRight } from 'react-icons/fi';
import { DEFAULT_TRANSITION } from '../../../../constants';

const animation = {
  unMounted: { x: -50, opacity: 0 },
  mounted: { x: 0, opacity: 1 },
};

const HelpDesk: React.FC = () => {
  return (
    <Container variants={animation} transition={DEFAULT_TRANSITION}>
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
