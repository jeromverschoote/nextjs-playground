import { breakpoints, colors, fonts } from 'src/styles';
import styled from 'styled-components';

const NavigationItem = `
  text-decoration: none;
  font-weight: ${fonts.weight.thin};

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Container = {
  Root: styled.header`
    background-color: ${colors.white.base};
    border-top: 1px solid ${colors.opacity.lighter};

    height: 1rem;
    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
    padding: 2rem;

    a,
    p,
    h1 {
      ${NavigationItem}
      color: ${colors.black.base};
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
  `,
  Foot: styled.ul`
    display: flex;
    align-items: center;

    li {
      margin-left: 1rem;
      list-style: none;
    }
  `,
};
