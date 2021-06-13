import faker from 'faker';

class User {

  constructor() {
    this.id = faker.datatype.uuid();
    this.avatar = faker.image.avatar();
    this.firstname = faker.name.firstName();
    this.surname = faker.name.lastName();
    this.email = faker.internet.email();
    this.phone = faker.phone.phoneNumber();
    this.address = faker.address.streetAddress();
  }

}

export default User;
