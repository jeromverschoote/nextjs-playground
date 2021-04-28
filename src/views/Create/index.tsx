import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Layout from 'src/components/Layout';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

const Create = (): JSX.Element => {
  const { t } = useTranslation();
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
        key: 'content',
        label: t('components.form.label.content'),
        placeholder: t('components.form.placeholder.content'),
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [t],
  );

  const handleSubmitForm = useCallback(() => null, []);

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
