import React from 'react';

import { Container, Title, Paragraph, Head, Body, Subtitle } from './styles';

interface Props {
  item: any;
}

const Item = (props: Props): JSX.Element => {
  const { title, text, userId, date } = props.item;

  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        <Subtitle>
          {userId} {date && `- ${date}`}
        </Subtitle>
      </Head>
      <Body>
        <Paragraph>{text}</Paragraph>
      </Body>
    </Container>
  );
};

export default Item;
