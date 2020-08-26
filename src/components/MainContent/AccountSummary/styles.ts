import styled, { css, DefaultTheme } from 'styled-components';

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
    padding: 1.6rem 2.4rem;
  `}
`;
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.8rem;

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

    > button {
      margin: -0.8rem -1.6rem 0 auto;
      padding: 0.8rem 1.6rem;

      svg {
        stroke-width: 1.5;
        stroke: ${theme.colors.grey};
      }
    }
  `}
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftData = styled.div`
  ${({ theme }) => css`
    margin-right: 0.8rem;
    max-width: 60%;
    width: 100%;

    > img {
      height: 7.2rem;
      width: auto;
    }
  `}
`;
export const RightData = styled.div`
  ${({ theme }) => css``}
`;

type DataValueType = {
  income?: boolean;
  outcome?: boolean;
};

const getDataColor = (
  colors: DefaultTheme['colors'],
  { income, outcome }: DataValueType,
) => {
  if (income) {
    return colors.success;
  }
  if (outcome) {
    return colors.error;
  }
  return 'inherit';
};

export const DataValue = styled.div<DataValueType>`
  ${({ theme, income, outcome }) => css`
    color: ${getDataColor(theme.colors, { income, outcome })};
  `}
`;
