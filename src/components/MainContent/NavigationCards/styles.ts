import styled, { css } from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  max-height: 12rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  column-gap: 0.8rem;
`;

export const Card = styled.li`
  ${({ theme }) => css`
    max-width: 12rem;
    max-height: 12rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${theme.colors.background};
    border-radius: ${theme.radius.default};
    padding: 1.6rem;
    box-shadow: ${theme.shadows.default};
    font-size: ${theme.fontSizes.default};

    div {
      background: ${theme.colors.lightGrey};
      max-height: 6.4rem;
      max-width: 6.4rem;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    svg {
      stroke: ${theme.colors.primary};
      stroke-width: 1.5;
      max-height: 2.4rem;
      height: 100%;
      width: auto;
    }

    :nth-child(2) {
      svg {
        stroke: none;
      }
    }
  `};
`;
