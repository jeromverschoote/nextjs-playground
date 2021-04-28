import { fonts } from 'src/styles';
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
  border-bottom: 1px solid ${(props) => props.theme.opacity.primary};
  margin-bottom: 1rem;
  width: 100%;
`;

export const Body = styled.div``;

export const Title = styled.h3`
  color: ${(props) => props.theme.text.primary};
  font-size: ${fonts.getSizeInRem(16)};
  padding-bottom: 0.5rem;
  width: 100%;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.text.secondary};
  font-size: ${fonts.getSizeInRem(11)};
  opacity: 0.7;
  font-weight: ${fonts.weight.thin};
  padding-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.text.secondary};
`;
