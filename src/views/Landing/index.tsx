import React from 'react';
import { useTranslation } from 'react-i18next';

import List from 'src/components/List';
import Layout from 'src/components/Layout';
import { usePosts } from 'src/hooks/usePosts';
import { useUsers } from 'src/hooks/useUsers';

import { Container, Content, Head, Body } from './styles';

const Landing = (): JSX.Element => {
  const { t } = useTranslation();

  const { posts } = usePosts();
  const { users } = useUsers();

  return (
    <Layout>
      <Container>
        <Content>
          <Head>
            <List.Users title={t('labels.users')} users={users} />
          </Head>
          <Body>
            <List.Posts title={t('labels.posts')} posts={posts} />
          </Body>
        </Content>
      </Container>
    </Layout>
  );
};

export default Landing;
