
import { faker } from '@faker-js/faker';
import { Customer } from '../e2e/interfaces/Customer';
import { PayeeDetails } from '../e2e/interfaces/PayeeDetails';


export class TestDataFactory {

  static generateCustomer():Customer {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode('#####'),
      phone: faker.phone.number(),
      ssn: faker.string.numeric(9),
      username: `user_${faker.string.alphanumeric(10)}`,
      password: `Test@${faker.string.alphanumeric(10)}`
    };
  }

  static generatePayee():PayeeDetails {
    return {
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode('#####'),
      phone: faker.phone.number(),
      accountNumber: faker.string.numeric(8),
      amount: 10
    };
  }
  
}
