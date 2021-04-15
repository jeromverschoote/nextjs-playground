import { breakpoints, colors, fonts } from 'src/styles';
import styled from 'styled-components';

const NavigationItem = `
  text-decoration: none;
  font-weight: ${fonts.weight.bold};

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Container = {
  Root: styled.header`
    background-color: ${colors.black.base};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem;

    position: fixed;

    z-index: 2;

    a,
    p,
    h1 {
      ${NavigationItem}
      color: ${colors.white.base};
    }

    @media (max-width: ${breakpoints.sm}) {
      height: 100vh;
      width: 65vw;

      align-items: flex-start;
      flex-direction: column;

      z-index: 3;
      transition: 0.2s;

      ${({ isCollapsed }: { isCollapsed: boolean }) => {
        if (!isCollapsed) {
          return `transform: translateX(0)`;
        }
        return `transform: translateX(-100%)`;
      }}
    }
  `,
  Head: styled.ul`
    display: flex;
    align-items: center;

    margin-right: 2rem;

    li {
      margin-right: 1rem;
      list-style: none;
    }

    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  `,
  Body: styled.ul`
    display: flex;
    align-items: center;

    flex-grow: 1;

    display: flex;
    align-items: flex-start;

    li {
      margin-right: 1rem;
      list-style: none;
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;

      margin-top: 6rem;
      margin-bottom: 3rem;

      li {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  `,
  Foot: styled.ul`
    display: flex;
    align-items: center;

    li {
      margin-left: 1rem;
      list-style: none;
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      align-items: flex-start;

      margin-top: 2rem;
      margin-bottom: 3rem;

      li {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  `,
  Menu: styled.div`
    background-color: ${colors.black.base};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    font-weight: ${fonts.weight.bold};
    color: ${colors.white.base};

    padding: 0 2rem;

    position: fixed;

    z-index: 4;

    @media (min-width: ${breakpoints.sm}) {
      display: none;
    }
  `,
};
