import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  outline: none;

  padding: 0.65rem 1rem;
  border-radius: 0.3rem;
  font-weight: ${fonts.weight.bold};
  font-size: 14px;

  cursor: pointer;
`;
