import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';
import { InputType } from 'src/types/Input';

import { Container, Error, Field, Input, Label } from './styles';
interface Props {
  fields: InputType[];
  submitLabel: string;
  onSubmit: (fields: any) => void;
  requestError: string;
  isValidated?: boolean;
}

const Form = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const {
    fields,
    onSubmit,
    submitLabel,
    requestError,
    isValidated = true,
  } = props;

  const [values, setValues]: [any, any] = useState({});
  const [message, setMessage] = useState(requestError || '');

  const handleChangeInput = useCallback(
    (field: InputType, value: string) => {
      const isValid = value !== '' || !field.isRequired;

      setValues({
        ...values,
        [field.key]: {
          value,
          isValid: isValidated ? isValid : true,
        },
      });
    },
    [isValidated, values],
  );

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidated) {
      // Reset errors
      setMessage('');

      // Throw error when form is incomplete
      if (Object.keys(values).length !== fields.length) {
        return setMessage(t('components.form.isComplete.message'));
      }

      // Throw error when form is incorrect
      const errors: string[] = [];

      Object.keys(values).forEach((key: string) => {
        const field = values[key];

        if (!field.isValid) {
          errors.push(field.value);
        }
      });

      if (errors.length > 0) {
        return setMessage(t('components.form.isInvalid.message'));
      }
    }

    // Prepare submit values
    const submitValues: any = {};
    Object.keys(values).forEach((key: string) => {
      submitValues[key] = values[key].value;
    });

    // Submit values
    return onSubmit(submitValues);
  };

  useEffect(() => {
    if (requestError) {
      setMessage(requestError);
    }
  }, [requestError]);

  return (
    <Container onSubmit={handleSubmitForm}>
      {fields?.map((field: InputType, index: number) => {
        const { label, type, placeholder, key } = field;

        const isValid = values[field.key] && values[field.key].isValid;

        return (
          <Field key={index}>
            <Label htmlFor={key}>{label}</Label>
            <Input
              id={key}
              name={key}
              type={type}
              placeholder={placeholder}
              onChange={(e: any) =>
                handleChangeInput(field, e.currentTarget.value)
              }
              onBlur={(e: any) =>
                handleChangeInput(field, e.currentTarget.value)
              }
              isValid={isValid}
            />
          </Field>
        );
      })}
      {message !== '' && <Error>{message}</Error>}
      <Button.Primary>{submitLabel}</Button.Primary>
    </Container>
  );
};

export default Form;
