import { AuthenticationSettings } from "../settings/authentication.settings";
import { ApiLib} from "../common/apiLib";

export class AuthService{

    constructor(apiLib = new ApiLib()) {
        this._apiLib = apiLib
    }
    
    async signUpUser(body) {
        const url = AuthenticationSettings.API.CREATE_USER;
        return await this._apiLib.callApi(url, "POST", body)
    }
}
