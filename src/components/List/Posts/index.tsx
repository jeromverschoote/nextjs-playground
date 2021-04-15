import React from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'src/components/Skeleton';
import { QueryType } from 'src/types/Query';

import Item from './Item';
import { Container, Subtitle, Title } from './styles';

interface Props {
  title: string;
  posts: QueryType;
}

const UsersList = (props: Props): JSX.Element => {
  const { title, posts } = props;
  const { isLoading, isError, data } = posts;

  const { t } = useTranslation();

  const isEmpty = data?.length === 0;

  if (isLoading) {
    return (
      <Container.Loading>
        {[0, 1].map((n) => (
          <Skeleton.Article key={n} />
        ))}
      </Container.Loading>
    );
  }

  if (isError) {
    return (
      <Container.Error>
        <Title>{title}</Title>
        <Subtitle>{t('components.list.isError.subtitle')}</Subtitle>
      </Container.Error>
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

  return (
    <Container.Success>
      <Title>{title}</Title>
      {data.map((item: any, index: number) => (
        <Item key={index} item={item} />
      ))}
    </Container.Success>
  );
};

export default UsersList;
