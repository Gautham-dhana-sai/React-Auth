import { useState } from "react"
import HeaderTab from "../Common/Header-Tab"
import InfiniteBox from "../Common/Infinite-Box"
import SingleSelectDropdown from "../Common/Single-Select-Dropdown"
import LocationBox from "../Common/Location-Box"
import ImageInput from "../imports/Image-Input"
import SaveButton from "../imports/Save-Button"
import ResetButton from "../imports/Reset-Button"

const AddItemForm = () => {

    const [itemName, setItemName] = useState("")
    const [itemNameBlur, setItemNameBlur] = useState(false)
    const [desc, setDesc] = useState("")
    const [descBlur, setDescBlur] = useState(false)
    const [address, setAddress] = useState("")
    const [addressBlur, setAddressBlur] = useState(false)
    const [pincode, setPincode] = useState("")
    const [pincodeBlur, setPincodeBlur] = useState(false)

    return (
        <>
            <div>
                <InfiniteBox>
                    <HeaderTab header="Add Item"></HeaderTab>
                    <form className="pad-5">
                        <div className="m-2 mb-3">
                            <input type="text" className="form-control" value={itemName} placeholder="Item Name"
                                onChange={(event) => {setItemName(event.target.value)}} onBlur={() => {setItemNameBlur(true)}}/>
                            <div className="">
                                {itemNameBlur && itemName.length === 0 && (<div className="form-text text-danger">Item name is required</div>)}
                                {itemNameBlur && itemName.length !== 0 && itemName.length < 4 && (<div className="form-text text-danger">Enter min 4 characters</div>)}
                            </div>
                        </div>
                        <div className="mb-3">
                            <LocationBox></LocationBox>
                        </div>
                        <div className="mb-3">
                            <div className="strip-half">
                                <div className="strip box">
                                    <SingleSelectDropdown placeholder='Category'></SingleSelectDropdown>
                                </div>
                                <div className="strip box">
                                    <SingleSelectDropdown placeholder='Brand'></SingleSelectDropdown>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 mb-3">
                            <textarea className="form-control" value={desc} placeholder="Description"
                                onChange={(event) => {setDesc(event.target.value)}} onBlur={() => {setDescBlur(true)}}/>
                            <div className="">
                                {descBlur && desc.length === 0 && (<div className="form-text text-danger">Description is required</div>)}
                                {descBlur && desc.length !== 0 && desc.length < 4 && (<div className="form-text text-danger">Enter min 4 characters</div>)}
                            </div>
                        </div>
                        <div className="m-2 mb-3">
                            <textarea className="form-control" value={address} placeholder="Address"
                                onChange={(event) => {setAddress(event.target.value)}} onBlur={() => {setAddressBlur(true)}}/>
                            <div className="">
                                {addressBlur && address.length === 0 && (<div className="form-text text-danger">Address is required</div>)}
                                {addressBlur && address.length !== 0 && address.length < 4 && (<div className="form-text text-danger">Enter min 4 characters</div>)}
                            </div>
                        </div>
                        <div className="m-2 mb-3">
                            <div className="col-md-6">
                                <input type="number" className="form-control" value={pincode} placeholder="Pincode"
                                    onChange={(event) => {setPincode(event.target.value)}} onBlur={() => {setPincodeBlur(true)}}/>
                                <div className="">
                                    {pincodeBlur && pincode.length === 0 && (<div className="form-text text-danger">Pincode is required</div>)}
                                    {pincodeBlur && pincode.length !== 0 && pincode.length < 6 && (<div className="form-text text-danger">Pincode should be 6 digits</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="m-2 mb-3">
                            <div className="col-md-6">
                                <ImageInput></ImageInput>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-3">
                                <ResetButton></ResetButton>
                            </div>
                            <div className="col-md-3">
                                <SaveButton></SaveButton>
                            </div>
                        </div>
                    </form>
                </InfiniteBox>
            </div>
        </>
    )
}

export default AddItemForm