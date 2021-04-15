import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 66rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Head = styled.div`
  width: 20rem;
  margin-right: 2rem;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Body = styled.div`
  flex-grow: 1;
`;
