import { env } from "../../environments/env"

export class AuthSettings {
    static API = {
        CREATE_USER: env.apiUrl + '/signup/user',
        VERIFY_SIGNUP: env.apiUrl + '/signup/verify/otp'
    }
}