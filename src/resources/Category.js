import faker from 'faker';

class Category {

  constructor(name, emoji, color) {
    this.id = faker.datatype.uuid();
    this.name = name;
    this.emoji = emoji;
    this.color = color;
  }

}

export default Category;
