import faker from 'faker';

class Offer {

  constructor(name, about, is_featured = false) {
    this.id = faker.datatype.uuid();
    this.name = name;
    this.about = about;
    this.promo_code = faker.address.zipCode();
    this.is_featured = is_featured;
  }

  static isFeatured(name, about) {
    return new Offer(name, about, true);
  }

  static fake(count = 1) {
    return Array(count).fill().map(() => {
      return new Offer(faker.lorem.sentence(), faker.lorem.sentence());
    })
  }

}

export default Offer;
