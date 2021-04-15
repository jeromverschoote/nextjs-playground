import Link from 'next/link';
import React from 'react';
import Avatar from 'src/components/Avatar';

import { Container, Title } from './styles';

interface Props {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  imageUrl: string | undefined;
  isTiny?: boolean;
}

const AvatarAuthor = (props: Props): any => {
  const { id, firstName, lastName, imageUrl = '', isTiny } = props;

  return (
    <Container>
      <Link href={`/user/${id}`}>
        <Avatar.Icon source={imageUrl} size={isTiny ? 0.5 : 1} />
      </Link>
      <Link href={`/user/${id}`}>
        <Title isTiny={isTiny ? isTiny : false}>
          {firstName} {lastName}
        </Title>
      </Link>
    </Container>
  );
};

export default AvatarAuthor;
