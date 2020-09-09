import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.aside`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    background: ${transparentize(0.92, theme.colors.grey)};
    padding: 2.4rem;
    border-radius: ${theme.radius.default};
  `}
`;
