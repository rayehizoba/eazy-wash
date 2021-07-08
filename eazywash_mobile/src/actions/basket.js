import {types} from '../reducers/basket';

/**
 *
 * @param cloth_id
 * @param service_id
 * @param quantity
 * @param rate
 * @returns {Function}
 */
export const updateItem = (cloth_id, service_id, quantity, rate) =>
  dispatch =>
    dispatch({
      type: types.UPDATE_ITEM,
      data: {cloth_id, service_id, quantity, rate},
    });

/**
 *
 * @returns {Function}
 */
export const clearAll = () => dispatch => dispatch({type: types.CLEAR_ALL});
