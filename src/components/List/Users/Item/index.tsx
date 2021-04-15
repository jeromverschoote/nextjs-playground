import React from 'react';
import Avatar from 'src/components/Avatar';

import { Container } from './styles';

interface Props {
  item: any;
}

const Item = (props: Props): JSX.Element => {
  const { id, firstName, lastName, imageUrl } = props.item;

  return (
    <Container>
      <Avatar.Author
        id={id}
        firstName={firstName}
        lastName={lastName}
        imageUrl={imageUrl}
        isTiny={true}
      />
    </Container>
  );
};

export default Item;
