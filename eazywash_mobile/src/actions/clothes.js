import axios from "../lib/axios";
import AxiosConfig from "../lib/AxiosConfig";
import {types} from "../reducers/clothes";

/**
 *
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const fetchClothes = () => {

  return dispatch => {
    dispatch({type: types.FETCH_START});

    const url = AxiosConfig.getEndpointAddress() + "/clothes";

    return axios.get(
      url,
      AxiosConfig.getAuthConfig()
    )
      .then((response) => {

        dispatch({
          type: types.FETCH_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.FETCH_REJECTED,
          data: error,
        });

      });
  };
};
