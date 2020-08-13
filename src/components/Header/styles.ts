import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  max-width: 100rem;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;

  > svg {
    max-width: 11.2rem;
    height: auto;
    margin-right: 2.4rem;
  }
`;

export const RightNav = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`;



