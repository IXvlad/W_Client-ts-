import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction } from '../types/user';
import { IRegistrationDTO } from '../../models/DTO/registrationDTO';
import { ILoginDTO } from '../../models/DTO/loginDTO';
import { IRegistrationResDTO } from '../../models/DTO/registrationResDTO';

export const registration = (data: IRegistrationDTO) => {
  const baseUrl = 'http://localhost:60411/api/';
  let response: IRegistrationResDTO;
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: 'REGISTRATION_USER' });
      response = await axios.post(baseUrl + 'AuthManagment/Register/', data);
      dispatch({ type: 'REGISTRATION_USER_SUCCESS', payload: response });
    } catch (e) {
      dispatch({ type: 'REGISTRATION_USER_ERROR', payload: response.errors });
    }
  };
};

export const login = (data: ILoginDTO) => {
  const baseUrl = 'http://localhost:60411/api/';
  let response: IRegistrationResDTO;
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: 'LOGIN_USER' });
      response = await axios.post(baseUrl + 'AuthManagment/Login', data);
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response });
    } catch (e) {
      dispatch({ type: 'LOGIN_USER_ERROR', payload: response.errors });
    }
  };
};

export const authentication = () => {
  const baseUrl = 'http://localhost:60411/api/';
  let response: IRegistrationResDTO;
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: 'AUTH_USER' });
      response = await axios.get(baseUrl + 'AuthManagment/Login');
      dispatch({ type: 'AUTH_USER_SUCCESS', payload: response });
    } catch (e) {
      dispatch({ type: 'AUTH_USER_ERROR', payload: response.errors });
    }
  };
};

export const logout = () => {
  const baseUrl = 'http://localhost:60411/api/';
  let response: IRegistrationResDTO;
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: 'LOGOUT_USER' });
      response = await axios.get(baseUrl + 'AuthManagment/Logout');
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response });
    } catch (e) {
      console.log('logout_error: ' + response.errors);
    }
  };
};
