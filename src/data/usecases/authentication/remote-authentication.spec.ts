import { RemoteAuthetication } from './remote.authetication';
import { HttpPostClientSpy } from '../../test/mock-http-client';
import { mockAuthentication } from '../../../domain/test/mock-authentication';
const { faker } = require('@faker-js/faker');

type SutTypes = {
    sut: RemoteAuthetication,
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url =  faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClientSpy)

    return {
        sut,
        httpPostClientSpy
    }

};

describe('RemoteAuthetication', () => {
    test('Should call HttpPostClient with correct URL', async () => {

        const url = faker.internet.url();
        const { sut, httpPostClientSpy } = makeSut(url);
        
        await sut.auth(mockAuthentication());
        
        expect(httpPostClientSpy.url).toBe(url);


    })

    test('Should call HttpPost with correct body', async () => {

        const { sut, httpPostClientSpy } = makeSut();
        const authenticationParams = mockAuthentication();

        await sut.auth(authenticationParams);
        
        expect(httpPostClientSpy.body).toEqual(authenticationParams);


    })

})