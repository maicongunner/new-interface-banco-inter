import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const Wrapper = styled(motion.div)`
  max-width: 113rem;
  width: 100%;
  display: flex;
`;
