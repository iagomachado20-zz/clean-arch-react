import { HttpPostClient } from "@/data/protocols/http/http.post.client";
import { HttpStatusCode } from "@/data/protocols/http/http.response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-errors";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AccountModel } from "@/domain/models/account-model";
import { AuthenticationParams } from "@/domain/usecases/authentication";
import { Authentication } from '@/domain/usecases/authentication';

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,

        private httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
    ) {}

    async auth(params: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params
        });

        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body;
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
            case HttpStatusCode.badRequest: throw new UnexpectedError()
            default: throw new UnexpectedError()
        }

    }
}