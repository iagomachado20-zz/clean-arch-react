import { AuthenticationParams } from '../usecases/authentication';
const { faker } = require('@faker-js/faker');

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})