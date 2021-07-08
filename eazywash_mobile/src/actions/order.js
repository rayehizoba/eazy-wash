import {types} from '../reducers/order';

/**
 *
 * @param data
 * @returns {Function}
 */
export const setOrder = (data) => {
  return dispatch => {

    dispatch({type: types.SET_MODEL, data});

  };
};
