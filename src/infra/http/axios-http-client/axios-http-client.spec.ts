import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
const { faker } = require('@faker-js/faker');
import { HttpPostParams } from '../../../data/protocols/http';

jest.mock('axios')
const mockedAxios =  axios as jest.Mocked<typeof axios>

const makeSut = () => {
    return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
});

describe('AxiosHttpClient', () => {
    test('Should call axios with correct values', async () =>  {
        const request = mockPostRequest()
        const sut = makeSut();

        await sut.post(request);

        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);

    })
});