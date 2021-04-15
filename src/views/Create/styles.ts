import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  max-width: 30rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 3.5rem;
  }
`;

export const Title = styled.h2`
  padding: 2rem 0 1rem 0;
`;
