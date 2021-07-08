import {types} from '../reducers/service';

/**
 *
 * @param data
 * @returns {Function}
 */
export const setService = (data) => {
  return dispatch => {

    dispatch({type: types.SET_MODEL, data});

  };
};
