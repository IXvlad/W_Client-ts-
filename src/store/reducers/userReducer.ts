import { UserAction, UserState } from '../types/user';

const initialState: UserState = {
  response: null,
  userName: '',
  isAuth: false,
  isLoading: false,
  error: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'REGISTRATION_USER':
      return { ...state, isLoading: true };
    case 'REGISTRATION_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuth: action.payload.success,
        error: [],
        response: action.payload,
        userName: action.payload.userName,
      };
    case 'REGISTRATION_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload,
      };
    case 'LOGIN_USER':
      return { ...state, isLoading: true };
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuth: action.payload.success,
        error: [],
        response: action.payload,
        userName: action.payload.userName,
      };
    case 'LOGIN_USER_ERROR':
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload,
      };
    case 'AUTH_USER':
      return { ...state, isLoading: true };
    case 'AUTH_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuth: action.payload.success,
        error: [],
        response: action.payload,
        userName: action.payload.userName,
      };
    case 'AUTH_USER_ERROR':
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT_USER':
      return { ...state, isLoading: true };
    case 'LOGOUT_USER_SUCCESS':
      return {
        response: null,
        userName: '',
        isAuth: false,
        isLoading: false,
        error: [],
      };
    case 'LOGOUT_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
