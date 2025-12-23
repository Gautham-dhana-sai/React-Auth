import { env } from "../../environments/env"

export const AuthSettings = {
    CREATE_USER: env.apiUrl + '/signup/user',
    VERIFY_SIGNUP: env.apiUrl + '/signup/verify/otp',
    LOGIN_USER: env.apiUrl + '/login/user'
}