import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Layout from 'src/components/Layout';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

const Login = (): JSX.Element => {
  const { t } = useTranslation();

  const [error] = useState('');

  const fields = [
    {
      key: 'name',
      label: t('components.form.label.name'),
      placeholder: t('components.form.placeholder.name'),
      type: InputEnum.Text,
      isRequired: true,
    },
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
    {
      key: 'passwordRepeat',
      label: t('components.form.label.passwordRepeat'),
      placeholder: t('components.form.placeholder.password'),
      type: InputEnum.Password,
      isRequired: true,
    },
  ];

  const handleSubmitForm = () => null;

  // const handleSubmitForm = async (values: Values) => {
  //   const { name, email, password, passwordRepeat, image } = values;

  //   setError('');

  //   if (password !== passwordRepeat) {
  //     return setError('Oops! Passwords do not match.');
  //   }

  //   try {
  //     const { data } = await api.post('/register', null, {
  //       params: {
  //         name,
  //         email,
  //         password,
  //         image,
  //       },
  //     });

  //     if (data.error) {
  //       return setError(data.error.message);
  //     }

  //     // Redirect to Landing
  //     props.history.push('/');
  //   } catch {
  //     // Throw error when couldn't connect to server
  //     setError(`Oops! Couldn't connect to the server. Please try again later.`);
  //   }
  // };

  return (
    <Layout>
      <Container>
        <Title>{t('views.register.title')}</Title>
        <Form
          fields={fields}
          onSubmit={handleSubmitForm}
          requestError={error}
          submitLabel={t('labels.register')}
        />
      </Container>
    </Layout>
  );
};

export default Login;
