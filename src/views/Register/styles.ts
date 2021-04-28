import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  max-width: 30rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.text.primary};
  padding: 2rem 0 1rem 0;
`;
