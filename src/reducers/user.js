import {types as appTypes} from './app';

export const types = {
  LOGIN_START: 'USER/LOGIN_START',
  LOGIN_FULFILLED: 'USER/LOGIN_FULFILLED',
  LOGIN_REJECTED: 'USER/LOGIN_REJECTED',

  REGISTER_START: 'USER/REGISTER_START',
  REGISTER_FULFILLED: 'USER/REGISTER_FULFILLED',
  REGISTER_REJECTED: 'USER/REGISTER_REJECTED',

  UPDATE_START: 'USER/UPDATE_START',
  UPDATE_FULFILLED: 'USER/UPDATE_FULFILLED',
  UPDATE_REJECTED: 'USER/UPDATE_REJECTED',

  LOGOUT: 'USER/LOGOUT',
};

export const initialState = {
  model: null,
  token: null,

  register: null,
  registerSuccess: false,
  registerError: null,

  login: null,
  loginSuccess: false,
  loginError: null,

  update: null,
  updateSuccess: false,
  updateError: null,
};

export default function reducer(
  state = { ...initialState },
  action
) {
  switch (action.type) {

    case types.REGISTER_START:
      return {
        ...state,
        register: true,
        registerSuccess: false,
        registerError: null,
      };

    case types.REGISTER_FULFILLED:
      return {
        ...state,
        register: false,
        registerSuccess: true,
        model: action.data,
      };

    case types.REGISTER_REJECTED:
      return {
        ...state,
        register: false,
        registerSuccess: false,
        registerError: action.data,
      };

    case types.LOGIN_START:
      return {
        ...state,
        login: true,
        loginSuccess: false,
        loginError: null,
      };

    case types.LOGIN_FULFILLED:
      return {
        ...state,
        login: false,
        loginSuccess: true,
        model: action.data.user,
        token: action.data.token,
      };

    case types.LOGIN_REJECTED:
      return {
        ...state,
        login: false,
        loginSuccess: false,
        loginError: action.data,
      };

    case types.UPDATE_START:
      return {
        ...state,
        update: true,
        updateSuccess: false,
        updateError: null,
      };

    case types.UPDATE_FULFILLED:
      return {
        ...state,
        update: false,
        updateSuccess: true,
        model: action.data.user,
      };

    case types.UPDATE_REJECTED:
      return {
        ...state,
        update: false,
        updateSuccess: false,
        updateError: action.data,
      };

    case types.LOGOUT:
      return {
        ...initialState,
      };

    case appTypes.CLEAR_ERRORS:
      return {
        ...initialState,
        model: state.model,
        token: state.token,
      };

    default:
      return state;
  }
}
