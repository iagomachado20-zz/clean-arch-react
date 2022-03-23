import { AuthenticationParams } from '@/domain/usecases/authentication';
import { AccountModel } from '../models/account-model';
const { faker } = require('@faker-js/faker');

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
    accessToken: 'ahdauhduahu2ii23219282'
})