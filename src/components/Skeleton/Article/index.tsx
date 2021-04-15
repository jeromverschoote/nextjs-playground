import React from 'react';

import Skeleton from '..';
import { Body, Container, Head, Shimmer } from './styles';

interface Props {
  isWithThumbnail?: boolean;
}

const ArticleSkeleton = (props: Props): JSX.Element => {
  const { isWithThumbnail } = props;

  if (isWithThumbnail) {
    return (
      <Container>
        <Shimmer />
        <Head>
          <Skeleton.Thumbnail />
        </Head>
        <Body>
          <Skeleton.Title />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
        </Body>
      </Container>
    );
  }

  return (
    <Container>
      <Shimmer />
      <Head></Head>
      <Body>
        <Skeleton.Title />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Text />
      </Body>
    </Container>
  );
};

export default ArticleSkeleton;
