import styled from 'styled-components';

export const Shape = styled.div`
  background-color: ${(props: any) => props.theme.background.secondary};
  margin: 10px 0;
  border-radius: 4px;

  width: 100%;
  height: 12px;
  margin-bottom: 10px;
`;
