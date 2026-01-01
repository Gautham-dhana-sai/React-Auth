import { env } from "../../environments/env"

export const LocationSettings = {
    GET_STATES_OF_COUNTRY: env.locationApiUrl + '/states',
    GET_CITIES_OF_COUNTRY_STATE: env.locationApiUrl + '/state/cities',
    GET_CITIES_OF_COUNTRY: env.locationApiUrl + '/cities'
}