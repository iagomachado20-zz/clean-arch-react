import { RemoteAuthetication } from './remote.authetication';
import { HttpPostClient } from '../../protocols/http/http.post.client';

describe('RemoteAuthetication', () => {
    test('Should call HttpPostClient with correct URL', async () => {

        class HttpPostClientSpy implements HttpPostClient {
            url ?: string;
            async post(url: string) {
                this.url = url;
                return Promise.resolve();
            }
        }

        const url = 'any_url';
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut = new RemoteAuthetication(url, httpPostClientSpy)
        await sut.auth();
        
        expect(httpPostClientSpy.url).toBe(url);


    })
})