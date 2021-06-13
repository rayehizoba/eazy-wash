import {types} from '../reducers/user';
import AxiosConfig from '../lib/AxiosConfig';
import axios from '../lib/axios';

/**
 *
 * @param email
 * @param password
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const login = (email, password) => {
  return dispatch => {
    dispatch({type: types.LOGIN_START});

    const url = AxiosConfig.getEndpointAddress() + '/login';
    return axios.post(
      url,
      {
        email,
        password,
      },
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        AxiosConfig.setAuthToken(response.data.token);

        dispatch({
          type: types.LOGIN_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.LOGIN_REJECTED,
          data: error,
        });

      });
  };
};

/**
 *
 * @returns {Function}
 */
export const logout = () => {
  return dispatch => {
    AxiosConfig.setAuthToken(null);
    dispatch({type: types.LOGOUT});
  };
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const updateProfile = (data) => {
  return async dispatch => {

    dispatch({type: types.UPDATE_START});

    const url = AxiosConfig.getEndpointAddress() + '/profile';

    await axios.patch(
      url,
      data,
      AxiosConfig.getAuthConfig(),
    )
      .then(response => {

        dispatch({type: types.UPDATE_FULFILLED, data: response.data});

      })
      .catch(error => {

        dispatch({type: types.UPDATE_REJECTED, data: error});

      });
  };
};
