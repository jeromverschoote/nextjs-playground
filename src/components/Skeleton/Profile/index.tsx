import React from 'react';

import Skeleton from '..';
import { Body, Container, Head, Shimmer } from './styles';

interface Props {
  isSimple?: boolean;
}

const ProfileSkeleton = (props: Props): JSX.Element => {
  const { isSimple } = props;

  if (isSimple) {
    return (
      <Container>
        <Shimmer />
        <Head>
          <Skeleton.Avatar size={1.6} />
        </Head>
        <Body>
          <Skeleton.Text />
        </Body>
      </Container>
    );
  }

  return (
    <Container>
      <Shimmer />
      <Head>
        <Skeleton.Avatar size={4} />
      </Head>
      <Body>
        <Skeleton.Title />
        <Skeleton.Text />
      </Body>
    </Container>
  );
};

export default ProfileSkeleton;
