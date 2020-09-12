import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import { Container, Balance } from './styles';
import Button from '../../../../components/Button';
import BalanceSecret from './BalanceSecret';

const AccountBalance: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isValueVisible, setIsValueVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        <AnimatePresence initial={false}>
          {!isHidden && <BalanceSecret setIsValueVisible={setIsValueVisible} />}
        </AnimatePresence>
        R$ <strong>{isValueVisible ? '765,59' : '---'}</strong>
      </Balance>
      <Button
        revision="transparent"
        onClick={() => setIsHidden(prevState => !prevState)}
      >
        {isHidden ? <FiEye /> : <FiEyeOff />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
