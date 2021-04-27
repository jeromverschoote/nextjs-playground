import { fonts } from 'src/styles';
import styled from 'styled-components';

const container = `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const Container = {
  Loading: styled.div`
    ${container}
    border: 1px solid ${(props: any) => props.theme.opacity.primary};
    padding: 1rem 2rem;
  `,
  Error: styled.div`
    ${container}
    border: 1px solid ${(props: any) => props.theme.opacity.primary};
  `,
  Empty: styled.div`
    ${container}
    border: 1px solid ${(props: any) => props.theme.opacity.primary};
  `,
  Success: styled.div`
    ${container}
    border: 1px solid ${(props: any) => props.theme.opacity.primary};
    background-color: ${(props: any) => props.theme.background.primary};
  `,
};

export const Title = styled.h2`
  font-size: ${fonts.getSizeInRem(10)};
  color: ${(props: any) => props.theme.text.primary};
  padding: 1rem;
  text-align: left;

  border-bottom: 1px solid ${(props) => props.theme.opacity.primary};

  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: ${fonts.getSizeInRem(10)};
  color: ${(props: any) => props.theme.text.primary};
  padding: 1rem;
  text-align: left;

  width: 100%;
`;

export const Content = styled.ul`
  padding: 2rem;
`;
