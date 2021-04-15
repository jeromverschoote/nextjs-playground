import { colors, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 2.5rem;

  font-size: ${fonts.getSizeInRem(10)};
`;

export const Head = styled.div`
  border-bottom: 1px solid ${colors.opacity.lighter};

  margin-bottom: 1rem;

  width: 100%;
`;

export const Body = styled.div``;

export const Title = styled.h3`
  font-size: ${fonts.getSizeInRem(16)};

  padding-bottom: 0.5rem;

  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: ${fonts.getSizeInRem(11)};
  opacity: 0.5;
  font-weight: ${fonts.weight.thin};
  color: ${colors.black.lightest};

  padding-bottom: 0.5rem;
`;

export const Paragraph = styled.p``;
