import styled from 'styled-components';

import { ButtonProps } from './Button';

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.colors.background};
`;
