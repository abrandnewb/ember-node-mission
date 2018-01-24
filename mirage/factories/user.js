import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  age() {
    return faker.random.number({ min: 18, max: 65});
  },
  image() {
    return faker.image.avatar();
  }
});