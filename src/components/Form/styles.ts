import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.form`
  padding: 1rem;
  border-radius: 0.4rem;

  margin-bottom: 1rem;

  // Label

  // Error

  // Button
  button {
    margin-top: 3rem;
  }

  // correction Label
  div:first-of-type label {
    padding-top: 0;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: ${fonts.getSizeInRem(10)};
  padding: 1.5rem 0 0.75rem 0;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  font-size: ${fonts.getSizeInRem(9)};
  padding: 0.75rem;
  border-radius: 0.4rem;
`;

export const Error = styled.p`
  margin-top: 1rem;
  font-size: ${fonts.getSizeInRem(8)};
  font-weight: ${fonts.weight.bold};
`;
