// import ContainerBox from "./Container-Box"

import PropTypes from "prop-types"
import "../../styles/inputs.css"
import { useRef, useState } from "react"
import SparkButton from "../imports/Spark-Button"

const Otp = ({email, verify, verifyLoader}) => {
    const [otp, setOpt] = useState(['', '', '', ''])
    const [toVerify, setToVerify] = useState(false)
    const inputRefs = useRef([]);

    const onEntering = (value, index) => {
        const new_otp = [...otp]
        if(value){
            if([0,1,2,3,4,5,6,7,8,9].includes(+value)){
                new_otp[index] = value
                if(inputRefs.current[index + 1]) {
                    inputRefs.current[index + 1].focus();
                }
            }
        } else {
            new_otp[index] = ''
            if(inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        }
        setOpt(new_otp)
    }

    const onVerify = () => {
        for(const digit of otp) {
            if(!digit) {
                setToVerify(true)
                return
            }
        }
        setToVerify(false)
        const body = { email, otp: otp.join('')}
        verify(body)
    }

    return (
        <>
            <div className="container text-center">
                <div className="">
                    <h3>Verification</h3>
                    <form>
                        <div className="d-flex justify-content-center">
                            <div className="mb-3">
                            <label className="form-label">Enter OTP to get verified.</label>
                            <br></br>
                            {Array.from({length: 4}).map((_, index) => (
                                <input ref={(el) => (inputRefs.current[index] = el)}
                                key={index} maxLength="1" type="text" inputMode="numeric" pattern="[0-9]" value={otp[index]}
                                onChange={(event) => {onEntering(event.target.value, index)}} className="otp-input"/>
                            ))}
                            {toVerify && (<div className="form-text text-danger">Please enter the OTP to verify</div>)}
                            </div>
                        </div>
                        <div>
                            <SparkButton name={'Verify'} clickFunc={onVerify} loading={verifyLoader}></SparkButton>
                        </div>
                    </form>
                </div>
            </div>
        </> 
    )
}

Otp.propTypes = {
  email: PropTypes.node,
  verify: PropTypes.func,
  verifyLoader: PropTypes.bool
}

export default Otp