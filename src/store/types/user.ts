import { IRegistrationResDTO } from '../../models/DTO/registrationResDTO';

export interface UserState {
  response: IRegistrationResDTO | null;
  userName: string;
  isAuth: boolean;
  isLoading: boolean;
  error: string[];
}

export type UserAction =
  | { type: 'REGISTRATION_USER' }
  | { type: 'REGISTRATION_USER_SUCCESS'; payload: IRegistrationResDTO }
  | { type: 'REGISTRATION_USER_ERROR'; payload: string[] }
  | { type: 'LOGIN_USER' }
  | { type: 'LOGIN_USER_SUCCESS'; payload: IRegistrationResDTO }
  | { type: 'LOGIN_USER_ERROR'; payload: string[] }
  | { type: 'AUTH_USER' }
  | { type: 'AUTH_USER_SUCCESS'; payload: IRegistrationResDTO }
  | { type: 'AUTH_USER_ERROR'; payload: string[] }
  | { type: 'LOGOUT_USER' }
  | { type: 'LOGOUT_USER_SUCCESS'; payload: IRegistrationResDTO }
  | { type: 'LOGOUT_USER_ERROR'; payload: string[] };
