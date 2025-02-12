import { env } from "../../environments/env"

export class AuthenticationSettings {
    static API = {
        CREATE_USER: env.apiUrl + '/signup/user'
    }
}