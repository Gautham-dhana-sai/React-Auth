import { AuthSettings } from "../settings/auth.settings";
import { ApiLib} from "../common/apiLib";

export class AuthService{

    constructor(apiLib = new ApiLib()) {
        this._apiLib = apiLib
    }
    
    async signUpUser(body) {
        const url = AuthSettings.API.CREATE_USER;
        return await this._apiLib.callApi(url, "POST", body)
    }

    async verifyOtp(body) {
        const url = AuthSettings.API.VERIFY_SIGNUP;
        return await this._apiLib.callApi(url, "POST", body)
    }

    async loginUser(body) {
        const url = AuthSettings.API.LOGIN_USER;
        return await this._apiLib.callApi(url, "POST", body)
    }
}
