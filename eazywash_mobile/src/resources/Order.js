import faker from 'faker';

class Order {

  constructor() {
    this.id = faker.datatype.uuid();
    this.order_number = faker.finance.account();
    this.status = Order.randomStatusType();
    this.amount = faker.finance.amount();
    this.updated_at = faker.datatype.datetime();
  }

  static fake(count = 1) {
    return Array(count).fill().map(() => new Order());
  }

  static statusTypes = [
    {status: 'Waiting', color: 'pink'},
    {status: 'Processing', color: 'purple'},
    {status: 'Ready for Pickup', color: 'green'},
    {status: 'Delivered', color: 'blue'},
  ];

  static randomStatusType() {
    const items = Order.statusTypes;
    return items[Math.floor(Math.random() * items.length)];
  }

  static isActiveOrder(order) {
    return order.status.status !== 'Delivered';
  }

}

export default Order;
