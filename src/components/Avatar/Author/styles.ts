import { fonts, colors } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: ${colors.link.base};
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-family: Helvetica;
  font-size: ${fonts.getSizeInRem(10)};
  font-weight: ${fonts.weight.bold};

  margin-left: 1.5rem;

  ${({ isTiny }: { isTiny: boolean }) => {
    if (isTiny) {
      return `margin-left: 0.7rem;`;
    }
    return ``;
  }}
`;
