import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  padding: 2rem;
  background-color: ${(props) => props.theme.background.secondary};

  li:hover {
    cursor: pointer;
  }
`;
