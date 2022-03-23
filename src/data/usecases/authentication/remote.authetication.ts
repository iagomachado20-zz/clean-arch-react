import { HttpPostClient } from "@/data/protocols/http/http.post.client";
import { HttpStatusCode } from "@/data/protocols/http/http.response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-errors";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AuthenticationParams } from "@/domain/usecases/authentication";

export class RemoteAuthetication {
    constructor(
        private readonly url: string,

        private httpPostClient: HttpPostClient
    ) {}

    async auth(params: AuthenticationParams): Promise<void> {
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params
        });

        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok: break;
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
            case HttpStatusCode.badRequest: throw new UnexpectedError()
            default: throw new UnexpectedError()
        }

    }
}