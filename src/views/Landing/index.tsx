import React from 'react';

import { Container, Content, Head, Body } from './styles';

import Layout from 'src/components/Layout';
import { useTranslation } from 'react-i18next';

import { usePosts } from 'src/hooks/usePosts';
import { useUsers } from 'src/hooks/useUsers';
import List from 'src/components/List';

const Landing = (): JSX.Element => {
  const { t } = useTranslation();

  const posts = usePosts();
  const users = useUsers();

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
