import {combineReducers} from 'redux';
import app from './app';
import cart from './cart';
import categories from './categories';
import offers from './offers';
import order from './order';
import orders from './orders';
import service from './service';
import services from './services';
import user from './user';

export default () => combineReducers({
  app,
  cart,
  categories,
  offers,
  order,
  orders,
  service,
  services,
  user,
});