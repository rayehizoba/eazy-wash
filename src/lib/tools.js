import { format } from 'date-fns';

/**
 *
 * @param callback
 * @returns {Function}
 */
export const afterAnimationFrame = (callback) => () => {
  requestAnimationFrame(callback);
};

/**
 *
 * @param datetime
 * @returns {string}
 */
export const dateForHumans = (datetime) => {
  return format(new Date(datetime), 'dd MMMM yyyy');
};

/**
 *
 * @param amount
 * @returns {string}
 */
export const priceForHumans = (amount) => {
  return '$'+amount;
};
