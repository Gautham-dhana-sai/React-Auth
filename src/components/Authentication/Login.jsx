import { useState } from "react";
import ContainerBox from "../Common/Container-Box";


export function Login() {
  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);
  const [password, setPassword] = useState("");
  const [passBlur, setPassBlur] = useState(false);

  function onSubmit() {
    setEmailBlur(true)
    setPassBlur(true)
  }

    return (
        <>
        <ContainerBox>
        <div className="container">
        <div className="">
          <h2 className="">Login</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                onBlur={() => {setEmailBlur(true)}}/>
              {emailBlur && email.length === 0 && (<div className="form-text text-danger">Email is required</div>)}
              {emailBlur && email.length !== 0 && !email.includes("@") && (<div className="form-text text-danger">Enter a valid email</div>)}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                onBlur={() => {setPassBlur(true)}}/>
              {passBlur && password.length === 0 && (<div className="form-text text-danger">Password is required</div>)}
              {passBlur && password.length !== 0 && password.length < 8 && (<div className="form-text text-danger">Enter min 8 characters</div>)}
            </div>
            {/* <div className="mb-3 foFrm-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div> */}
            <button type="button" className="btn btn-outline-light btn-dark" onClick={onSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
        </ContainerBox>
        </>
    )
}
