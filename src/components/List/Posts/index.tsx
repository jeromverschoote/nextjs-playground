import React from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'src/components/Skeleton';
import { QueryType } from 'src/types/Query';

import Item from './Item';
import { Container, Subtitle, Title, Content } from './styles';

interface Props {
  title: string;
  posts: QueryType;
}

const PostsList = (props: Props): JSX.Element => {
  const { title, posts } = props;
  const { isLoading, isError, data } = posts;

  const { t } = useTranslation();

  const isEmpty = data?.length === 0;

  if (isLoading) {
    return (
      <Container.Loading>
        {[0, 1, 2, 3, 4].map((n) => (
          <Skeleton.Article key={n} />
        ))}
      </Container.Loading>
    );
  }

  if (isEmpty) {
    return (
      <Container.Empty>
        <Title>{title}</Title>
        <Subtitle>{t('components.list.isEmpty.subtitle')}</Subtitle>
      </Container.Empty>
    );
  }

  if (isError || !data) {
    return (
      <Container.Error>
        <Title>{title}</Title>
        <Subtitle>{t('components.list.isError.subtitle')}</Subtitle>
      </Container.Error>
    );
  }

  return (
    <Container.Success>
      <Title>{title}</Title>
      <Content>
        {data.map((item: any, index: number) => (
          <Item key={index} item={item} />
        ))}
      </Content>
    </Container.Success>
  );
};

export default PostsList;
