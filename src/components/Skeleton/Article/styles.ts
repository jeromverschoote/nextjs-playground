import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: ${(props: any) => props.theme.background.primary};

  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;

  position: relative;

  margin: 0.7rem 0;

  overflow: hidden;

  width: 100%;
`;

export const Head = styled.div`
  margin-right: 1rem;
`;

export const Body = styled.div`
  width: 100%;
`;

const shimmer = keyframes`
  from {
    transform: translateX(-800%) skewX(-20deg);
  }

  to {
    transform: translateX(800%) skewX(-20deg);
  }
`;

export const Shimmer = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 50%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 1rem 1rem 1rem 1rem rgba(255, 255, 255, 0.2);

  animation: ${shimmer} 2.5s linear infinite;

  z-index: 1;
`;
