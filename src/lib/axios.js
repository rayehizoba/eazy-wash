import axios from 'axios';
import Service from '../resources/Service';
import Offer from '../resources/Offer';
import Order from '../resources/Order';
import User from '../resources/User';
import Category from '../resources/Category';
import Cloth from '../resources/Cloth';

// set default timeout to one minute
axios.defaults.timeout = 60000;

export default axios;

/**
 * used for mocking axios requests until
 * a real API is built to handle these requests
 * @type {{RequestHandler: RequestHandler; default}}
 */
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

mock.onPost('/login').reply(200, {
  token: 'mock_token',
  user: new User(),
});

mock.onPatch('/profile').reply(200, {
  user: new User(),
});

mock.onGet('/offers').reply(200, {
  offers: [
    Offer.isFeatured('Flat 25% off on Your First Order!', 'Valid for all new customers this month of June'),
    new Offer('New Customer? First wash Free!', 'Oh! You are a new customer? Order & get your first discount. You need to do some really cool stuff first'),
  ].concat(Offer.fake(4)),
});

mock.onGet('/orders').reply(200, {
  orders: Order.fake(10),
});

mock.onGet('/services').reply(200, {
  services: [
    new Service('Dry Cleaning', '12 Hours Min.'),
    new Service('Wash & Fold', '6 Hours Min.'),
    new Service('Ironing', '5 Hours Min.'),
    new Service('Darning', '24 Hours Min.'),
  ],
});

const categories = [
  new Category('Popular', '🔥', 'red'),
  new Category('Business Clothes', '👔', 'blue'),
  new Category('Outerwear', '🧥', 'purple'),
  new Category('Casual Wear', '👕', 'green'),
  new Category('Napkins & Quilts', '🛏️', 'yellow'),
  new Category('Footwear', '👟', 'indigo'),
];

mock.onGet('/categories').reply(200, {categories});

mock.onGet('/clothes').reply(200, {
  clothes: [
    new Cloth('Kids Dress', categories.find(i => i.color === 'red')),
    new Cloth('Tuxedo', categories.find(i => i.color === 'purple')),
    new Cloth('Jackets & Sweaters', categories.find(i => i.color === 'purple')),
    new Cloth('Shorts', categories.find(i => i.color === 'green')),
    new Cloth('Jeans', categories.find(i => i.color === 'green')),
    new Cloth('Skirt', categories.find(i => i.color === 'green')),
    new Cloth('Duvet', categories.find(i => i.color === 'yellow')),
  ]
});
