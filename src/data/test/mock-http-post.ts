import { HttpPostParams } from "../protocols/http";
const { faker } = require('@faker-js/faker');

export const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
});