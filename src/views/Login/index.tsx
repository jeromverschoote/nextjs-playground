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
  ];

  const handleSubmitForm = () => null;

  // const handleSubmitForm = async (values: Values) => {
  //   const { email, password } = values;

  //   setError('');

  //   try {
  //     const { data } = await api.post('/login', null, {
  //       params: {
  //         email,
  //         password,
  //       },
  //     });

  //     if (data.error) {
  //       return setError(data.error.message);
  //     }

  //     // Set token
  //     const token = data.result.token;
  //     localStorage.setItem('jwt', token);

  //     // Login user
  //     const user = data.result.user;
  //     handleLogin(user);

  //     // Redirect to Profile
  //     return props.history.push(`/${user.id}`);
  //   } catch {
  //     // Throw error when couldn't connect to server
  //     setError(`Oops! Couldn't connect to the server. Please try again later.`);
  //   }
  // };

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
