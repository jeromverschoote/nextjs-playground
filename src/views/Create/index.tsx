import { useRouter } from 'next/router';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AuthContext from 'src/context/Auth';
import Form from 'src/components/Form';
import Layout from 'src/components/Layout';
import InputEnum from 'src/enums/Input';
import { usePosts } from 'src/hooks/usePosts';

import { Container, Title } from './styles';

const Create = (): JSX.Element => {
  const router = useRouter();

  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { handleCreatePost } = usePosts();

  const [error] = useState('');

  const fields = useMemo(
    () => [
      {
        key: 'title',
        label: t('components.form.label.title'),
        placeholder: t('components.form.placeholder.title'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'text',
        label: t('components.form.label.content'),
        placeholder: t('components.form.placeholder.content'),
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [t],
  );

  const handleSubmitForm = useCallback(
    async (data: any) => {
      const { title, text } = data;

      if (!user || user.id === 0) {
        return;
      }

      const result = handleCreatePost({
        id: 8,
        title,
        text,
        date: '',
        userId: user.id,
      });

      if (result) {
        router.push('/');
      }
    },
    [handleCreatePost, router, user],
  );

  return (
    <Layout>
      <Container>
        <Title>{t('views.create.title')}</Title>
        <Form
          fields={fields}
          onSubmit={handleSubmitForm}
          requestError={error}
          submitLabel={t('labels.add')}
        />
      </Container>
    </Layout>
  );
};

export default Create;
