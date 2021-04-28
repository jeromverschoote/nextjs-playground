import { fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.theme.success.primary};
  color: ${palette.white.base};

  font-weight: ${fonts.weight.normal};

  outline: none;
  border: none;

  padding: 0.65rem 1rem;
  border-radius: 0.3rem;
  font-weight: ${fonts.weight.bold};
  font-size: 14px;

  cursor: pointer;

  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.success.secondary};
  }
`;
