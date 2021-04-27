import styled from 'styled-components';

export const Shape = styled.div`
  position: relative;

  background-color: ${(props: any) => props.theme.background.secondary};
  margin: 0.1rem 0;

  border-radius: 50%;

  overflow: hidden;

  ${({ size }: { size: number }) => {
    return `
      width: ${size}rem;
      height: ${size}rem;
  `;
  }}
`;
