import React from 'react';

import { Container } from './styles';

interface Props {
  children: any;
  onClick?: () => void;
}

const PrimaryButton = React.forwardRef((props: Props, ref: any) => {
  const { children, onClick } = props;

  return (
    <Container onClick={onClick} ref={ref}>
      {children}
    </Container>
  );
});

PrimaryButton.displayName = 'PrimaryButton';
export default PrimaryButton;
