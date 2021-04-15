import React from 'react';
import Layout from 'src/components/Layout';

import { useRouter } from 'next/router';

import { Container } from './styles';

const User = (): JSX.Element => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout>
      <Container>
        <h3>User</h3>
        <p>{id}</p>
      </Container>
    </Layout>
  );
};

export default User;
