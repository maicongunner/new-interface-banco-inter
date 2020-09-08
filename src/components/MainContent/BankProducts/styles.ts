import styled, { css } from 'styled-components';
import { Container as ButtonContainer } from '../../../components/Button/styles';
import ButtonBackground from '../../../assets/images/illustrations/button_background.svg';

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
    max-height: 34.2rem;
    height: 100%;
    width: 100%;
    > div {
      display: flex;
      justify-content: space-between;
      + div {
        margin-top: 2.4rem;
        height: 100%;
      }
    }
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 35.2rem;
    width: 100%;
    border-radius: ${theme.radius.default};
    flex: 1 0 100%;
    svg:first-of-type {
      margin-left: 1.6rem;
    }
    > div {
      color: ${theme.colors.grey};
      font-size: ${theme.fontSizes.small};
      text-align: left;
      max-width: 12rem;
      width: 100%;
      margin-left: -4rem;
      > h3 {
        color: ${theme.colors.darkGrey};
        font-size: ${theme.fontSizes.large};
      }
    }
  `}
`;

export const EquityButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    max-width: 38.4rem;
    width: 100%;
    max-height: 18.4rem;
    height: 100%;
    color: ${theme.colors.yellow};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: ${theme.radius.default};
    background-image: url(${ButtonBackground});

    > h3 {
      font-size: ${theme.fontSizes.large};
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      > ul {
        color: ${theme.colors.background};
        li {
          strong {
            margin: 0 0.5rem;
          }

          svg {
            stroke-width: 1.5;
            margin-right: 0.8rem;
            flex-grow: 0;
          }
        }
      }

      > button {
        font-size: ${theme.fontSizes.small};
        font-weight: 700;
        padding: 0.8rem 1.6rem;
        max-width: 11rem;
      }
    }
  `}
`;

export const LoanButton = styled(EquityButton)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    background-image: none;

    > h3 {
      text-align: left;
      > span {
        display: block;
        font-weight: 300;
        color: ${theme.colors.background};
      }
    }
    > div {
      > ul {
        max-width: 14.1rem;

        li {
          display: flex;
          align-items: flex-start;
          svg {
            margin-top: 0.3rem;
          }
          span {
            max-width: 12rem;
          }
        }
      }
    }
  `}
`;
