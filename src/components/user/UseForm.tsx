import React, { FC, ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { ILoginDTO } from '../../models/DTO/loginDTO';
import { IRegistrationDTO } from '../../models/DTO/registrationDTO';

export function useForm(
  initialValues: ILoginDTO | IRegistrationDTO,
  validateOnChange: boolean = false,
  validate: any
) {
  const [values, setValues] = useState<ILoginDTO | IRegistrationDTO>(
    initialValues
  );
  const [errors, setErrors] = useState<any>({});

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    inputChangeHandler,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));
interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className: string;
}
export const Form: FC<FormProps> = ({ children, onSubmit, className }) => {
  const classes = useStyles();
  return (
    <form
      className={classes.root && className}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
