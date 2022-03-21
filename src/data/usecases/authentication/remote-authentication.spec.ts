import { RemoteAuthetication } from './remote.authetication';
import { HttpPostClientSpy } from '../../test/mock-http-client';

type SutTypes = {
    sut: RemoteAuthetication,
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = 'any_url'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClientSpy)

    return {
        sut,
        httpPostClientSpy
    }

};

describe('RemoteAuthetication', () => {
    test('Should call HttpPostClient with correct URL', async () => {

        const url = "any_url";
        const { sut, httpPostClientSpy } = makeSut(url);
        
        await sut.auth();
        
        expect(httpPostClientSpy.url).toBe(url);


    })
})