import { env } from "../../environments/env"

export const AuthSettings = {
    CREATE_USER: env.loginApiUrl + '/signup/user',
    VERIFY_SIGNUP: env.loginApiUrl + '/signup/verify/otp',
    LOGIN_USER: env.loginApiUrl + '/login/user'
}