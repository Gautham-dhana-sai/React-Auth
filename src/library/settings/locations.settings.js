const locationEndPoint = 'https://countriesnow.space/api/v0.1/countries'

export const LocationSettings = {
    GET_STATES_OF_COUNTRY: locationEndPoint + '/states',
    GET_CITIES_OF_COUNTRY_STATE: locationEndPoint + '/state/cities',
    GET_CITIES_OF_COUNTRY: locationEndPoint + '/cities'
}