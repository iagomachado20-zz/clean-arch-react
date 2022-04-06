import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
const { faker } = require('@faker-js/faker');

jest.mock('axios')
const mockedAxios =  axios as jest.Mocked<typeof axios>

const makeSut = () => {
    return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
    test('Should call axios with correct URL', async () =>  {
        const url = faker.internet.url()
        const sut = makeSut();

        await sut.post({ url });

        expect(mockedAxios).toHaveBeenCalledWith(url);

    })
});