import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;

  display: flex;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme.opacity.primary};
  padding: 1rem 1rem;

  font-size: ${fonts.getSizeInRem(10)};
  color: ${(props) => props.theme.text.primary};

  width: 200%;

  &:hover {
    background-color: ${(props) => props.theme.opacity.primary};
  }
`;
