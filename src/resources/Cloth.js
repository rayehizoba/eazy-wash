import faker from 'faker';

class Cloth {

  constructor(name, category_id) {
    this.id = faker.datatype.uuid();
    this.category_id = category_id;
    this.name = name;
    this.rate = faker.finance.amount();
  }

}

export default Cloth;
