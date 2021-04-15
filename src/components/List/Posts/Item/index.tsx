import React from 'react';

import { Container, Title, Paragraph } from './styles';

interface Props {
  item: any;
}

const Item = (props: Props): JSX.Element => {
  const { title, text } = props.item;

  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

export default Item;
