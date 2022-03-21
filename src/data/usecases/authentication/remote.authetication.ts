import { HttpPostClient } from "data/protocols/http/http.post.client";

export class RemoteAuthetication {
    constructor(
        private readonly url: string,
        private httpPostClient: HttpPostClient
    ) {}

    async auth(): Promise<void> {
        await this.httpPostClient.post(this.url);
    }
}