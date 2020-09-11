import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import { Container, Balance } from './styles';
import Button from '../../../../components/Button';

const AccountBalance: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        <AnimatePresence>
          {isVisible && (
            <motion.span
              key="balance-secret"
              layoutId="balance-secret"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              exit={{ width: '0%' }}
            />
          )}
        </AnimatePresence>
        <motion.div
          key="balance-value"
          layoutId="balance-value"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          exit={{ opacity: 0, x: -15 }}
        >
          R$ <strong>765,59</strong>
        </motion.div>
      </Balance>
      <Button
        variant="transparent"
        onClick={() => setIsVisible(prevState => !prevState)}
      >
        {isVisible ? <FiEye /> : <FiEyeOff />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
