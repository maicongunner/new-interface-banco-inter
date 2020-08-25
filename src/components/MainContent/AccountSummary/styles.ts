import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2.4rem;
    margin: 2.4rem 0;
  `}
`;

export const Card = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 17.6rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    padding: 1.6rem;
  `}
`;
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;

    > img {
      max-width: 25px;
      max-height: 15px;
    }

    > svg {
      margin-right: 0.8rem;
      stroke: ${theme.colors.primary};
      stroke-width: 1.5;
    }

    > h3 {
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.darkGrey};
      font-weight: 500;
    }
  `}
`;
export const LeftData = styled.div`
  ${({ theme }) => css``}
`;
export const RightData = styled.div`
  ${({ theme }) => css``}
`;

export const DataValue = styled.div`
  ${({ theme }) => css``}
`;
