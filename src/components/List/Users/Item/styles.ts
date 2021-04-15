import { colors, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;

  display: flex;
  align-items: center;

  overflow: hidden;

  border-top: 1px solid ${colors.opacity.light};

  padding: 1rem 1rem;

  width: 100%;

  font-size: ${fonts.getSizeInRem(10)};

  &:hover {
    background-color: ${colors.opacity.lighter};
  }
`;
