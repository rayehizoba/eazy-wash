import {combineReducers} from 'redux';
import app from './app';
import basket from './basket';
import categories from './categories';
import clothes from './clothes';
import offers from './offers';
import order from './order';
import orders from './orders';
import service from './service';
import services from './services';
import user from './user';

export default () => combineReducers({
  app,
  basket,
  categories,
  clothes,
  offers,
  order,
  orders,
  service,
  services,
  user,
});
