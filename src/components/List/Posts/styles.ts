import { fonts, colors } from 'src/styles';
import styled from 'styled-components';

const container = `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0.4rem;
  margin-top: 2rem;
  border: 1px solid ${colors.opacity.light};

  overflow: hidden;
`;

export const Container = {
  Loading: styled.div`
    ${container}
  `,
  Error: styled.div`
    ${container}
  `,
  Empty: styled.div`
    ${container}
  `,
  Success: styled.div`
    ${container}
  `,
};

export const Title = styled.h2`
  font-size: ${fonts.getSizeInRem(10)};
  padding: 1rem;
  text-align: left;

  border-bottom: 1px solid ${colors.opacity.lighter};
  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: ${fonts.getSizeInRem(10)};
  padding: 1rem;
  text-align: left;

  width: 100%;
`;
