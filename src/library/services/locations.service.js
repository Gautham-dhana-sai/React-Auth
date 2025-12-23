import { ApiLib } from "../common/apiLib";
import { LocationSettings } from "../settings/locations.settings";

export class LocationsService {
    constructor(apiLib = new ApiLib()){
        this._apiLib = apiLib
    }

    async getStatesListOfCountry(body) {
        const url = LocationSettings.GET_STATES_OF_COUNTRY;
        return await this._apiLib.callApi(url, "POST", body)
    }

    async getCitiesOfState(body) {
        const url = LocationSettings.GET_CITIES_OF_COUNTRY_STATE;
        return await this._apiLib.callApi(url, "POST", body)
    }

    async getCitiesListOfCountry(body) {
        const url = LocationSettings.GET_CITIES_OF_COUNTRY;
        return await this._apiLib.callApi(url, "POST", body)
    }
}