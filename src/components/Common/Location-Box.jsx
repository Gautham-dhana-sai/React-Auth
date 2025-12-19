import "../../styles/boxes.css"
import SingleSelectDropdown from "./Single-Select-Dropdown"

const states = [
    "Andhra Pradesh",
    "Telangana",
    "Kerala",
    "Tamil Nadu",
    "Karnataka",
    "Odisha",
    "Maharastra"
]

const cities = [
    "Visakhapatnam",
    "Kakinada",
    "Vijayanagaram",
    "Tirupathi",
    "Hyderabad",
    "Bengaluru",
    "Mysore",
    "Chennai",
    "Thiruvanthapuram",
    "Varkala",
    "Bhuvaneshwar",
    "Pune",
    "Mumbai",
    "Nagpur"
]

const LocationBox = () => {
    return (
        <>
            <section className="strip-row">
                <div className="strip box">
                    <SingleSelectDropdown placeholder="State" options={states}></SingleSelectDropdown>
                </div>
                <div className="strip box">
                    <SingleSelectDropdown placeholder="City" options={cities}></SingleSelectDropdown>
                </div>
            </section>
        </>
    )
}

export default LocationBox