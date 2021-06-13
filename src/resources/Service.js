import faker from 'faker';

class Service {

  constructor(name, about) {
    this.id = faker.datatype.uuid();
    this.name = name;
    this.about = about;
  }

}

export default Service;
