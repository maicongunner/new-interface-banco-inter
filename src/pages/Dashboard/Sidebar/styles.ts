import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
    padding: 2.4rem;
  `}
`;
