import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;

  display: flex;
  align-items: center;

  overflow: hidden;

  border-top: 1px solid ${(props) => props.theme.opacity.primary};

  padding: 1rem 1rem;

  width: 100%;

  font-size: ${fonts.getSizeInRem(10)};
  color: ${(props) => props.theme.text.primary};

  &:hover {
    background-color: ${(props) => props.theme.opacity.primary};
  }
`;
