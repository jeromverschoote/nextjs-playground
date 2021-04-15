import { colors, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow: hidden;

  padding: 2rem;

  width: 100%;

  font-size: ${fonts.getSizeInRem(10)};
`;

export const Title = styled.h3`
  font-size: ${fonts.getSizeInRem(16)};

  border-bottom: 1px solid ${colors.opacity.lighter};

  padding-bottom: 0.5rem;
  margin-bottom: 1rem;

  width: 100%;
`;

export const Paragraph = styled.p``;
