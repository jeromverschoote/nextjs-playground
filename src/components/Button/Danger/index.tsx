import React from 'react';

import { Container } from './styles';

interface Props {
  children: any;
  onClick?: () => void;
}

const DangerButton = (props: Props): JSX.Element => {
  const { children, onClick } = props;

  return <Container onClick={onClick}>{children}</Container>;
};

export default DangerButton;
