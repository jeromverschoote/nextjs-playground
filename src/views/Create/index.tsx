import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Layout from 'src/components/Layout';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

const Create = (): JSX.Element => {
  const { t } = useTranslation();
  // const { user }: { user: any } = useContext(Auth);
  const [error] = useState('');
  // const router = useRouter();

  const fields = [
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
  ];

  const handleSubmitForm = () => null;

  // const handleSubmitForm = async (values: Values) => {
  //   const { title, address, type, price, image } = values;

  //   // Reset error
  //   setError('');

  //   try {
  //     const { data } = await api.post('/estate', null, {
  //       params: {
  //         userId: user!._id,
  //         title,
  //         type,
  //         address,
  //         image,
  //         price,
  //       },
  //     });

  //     if (data.error) {
  //       return setError(data.error.message);
  //     }

  //     // Redirect to Landing
  //     return router.push('/');
  //   } catch {
  //     // Throw error when couldn't connect to server
  //     setError(t('messages.error.server.down'));
  //   }
  // };

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
