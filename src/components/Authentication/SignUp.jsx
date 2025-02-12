import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../Common/Container-Box";
import {AuthService} from "../../library/services/authentication.service";

export function SignUp() {
  const authService = new AuthService()
  const navigate = useNavigate()

  const [user_name, setUserName] = useState("");
  const [nameBlur, setNameBlur] = useState(false);
  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);
  const [password, setPassword] = useState("");
  const [passBlur, setPassBlur] = useState(false);

  async function onSubmit() {
    setEmailBlur(true)
    setPassBlur(true)
    setNameBlur(true)
    if(email.includes('@') && password.length >= 8 && user_name.length >= 8) {
      await signUpUser()
    }
  }

  async function signUpUser() {
    const body = {
      email,
      password
    }
    console.log(body)
    await authService.signUpUser(body).then((response) => {
      if(response.success) {
        navigate('/signup')
      }
    })
  }

  return (
    <>
    <ContainerBox>
      <div className="container">
        <div className="">
          <h2 className="">Sign Up</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input type="email" className="form-control" value={user_name}
                onChange={(event) => {setUserName(event.target.value)}}
                onBlur={() => {setNameBlur(true)}}/>
              {nameBlur && user_name.length === 0 && (<div className="form-text text-danger">User Name is required</div>)}
              {nameBlur && user_name.length !== 0 && user_name.length < 8 && (<div className="form-text text-danger">Enter min 8 characters</div>)}
            </div>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </ContainerBox>
    </>
  );
}
