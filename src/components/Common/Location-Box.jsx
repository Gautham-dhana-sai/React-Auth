import { useEffect, useState } from "react"
import "../../styles/boxes.css"
import SingleSelectDropdown from "./Single-Select-Dropdown"
import { LocationsService } from "../../library/services/locations.service"

const LocationBox = () => {
    const locationsService = new LocationsService()
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        const getStatesList = async () => {
            const response = await locationsService.getStatesListOfCountry({country: "India"})
            if(response?.data?.states){
                setStates(response.data.states)
            }
        }

        const getCitiesList = async () => {
            const response = await locationsService.getCitiesListOfCountry({country: "India"})
            if(response?.data){
                setCities(response.data)
            }
        }
        getStatesList()
        getCitiesList()
    }, [])

    const selectedState = async (item) => {
        const response = await locationsService.getCitiesOfState({country: "India", state: item})
        setState(item)
        setCity("")
        if(response?.data){
            setCities(response.data)
        }
    }

    const selectedCity = (item) => {
        setCity(item)
    }

    return (
        <>
            <section className="strip-row">
                <div className="strip box">
                    <SingleSelectDropdown placeholder={"State"} display={state} options={states} selectItem={selectedState}></SingleSelectDropdown>
                </div>
                <div className="strip box">
                    <SingleSelectDropdown placeholder={"City"} display={city} list={cities} selectItem={selectedCity}></SingleSelectDropdown>
                </div>
            </section>
        </>
    )
}

export default LocationBox