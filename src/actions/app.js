import {types} from '../reducers/app';

/**
 *
 * @returns {Function}
 */
export const clearErrors = () => {
  return dispatch => {
    dispatch({type: types.CLEAR_ERRORS});
  };
};
