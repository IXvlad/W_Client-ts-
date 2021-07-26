import React, { FC, useState, useEffect } from 'react';
import {
  Grid,
  Link,
  Box,
  Typography,
  Container,
  Button,
  CssBaseline,
  Avatar,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from '../controls/Input';

import { useForm } from './UseForm';
import { useSelector } from '../../hooks/useSelector';
import { useActions } from '../../hooks/useActions';
import { ILoginDTO } from '../../models/DTO/loginDTO';

var validator = require('email-validator');
const initialValue: ILoginDTO = {
  email: '',
  password: '',
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/IXvlad">
        My GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
interface LoginFormProps {}
const LoginForm: FC<LoginFormProps> = () => {
  const classes = useStyles();

  const validate = (fieldValues: ILoginDTO = values) => {
    let temp = { ...errors };
    if ('email' in fieldValues)
      temp.Email =
        fieldValues.email && validator.validate(fieldValues.email)
          ? ''
          : 'Некорректный Email!';
    if ('password' in fieldValues)
      temp.Password = fieldValues.password ? '' : 'Введите пароль!';
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };
  const { values, setValues, errors, setErrors, inputChangeHandler } = useForm(
    initialValue,
    true,
    validate
  );
  const { isAuth, error } = useSelector((state) => state.user);
  const { login, registration } = useActions();
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      login(values);
    }
  };

  return <div></div>;
};
export default LoginForm;
