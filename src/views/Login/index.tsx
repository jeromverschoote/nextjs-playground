import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Layout from 'src/components/Layout';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

const Login = (): JSX.Element => {
  const { t } = useTranslation();

  const [error] = useState('');

  const fields = useMemo(
    () => [
      {
        key: 'email',
        label: t('components.form.label.email'),
        placeholder: t('components.form.placeholder.email'),
        type: InputEnum.Email,
        isRequired: true,
      },
      {
        key: 'password',
        label: t('components.form.label.password'),
        placeholder: t('components.form.placeholder.password'),
        type: InputEnum.Password,
        isRequired: true,
      },
    ],
    [t],
  );

  const handleSubmitForm = useCallback(() => null, []);

  return (
    <Layout>
      <Container>
        <Title>{t('views.login.title')}</Title>
        <Form
          fields={fields}
          onSubmit={handleSubmitForm}
          requestError={error}
          submitLabel={t('labels.login')}
        />
      </Container>
    </Layout>
  );
};

export default Login;
