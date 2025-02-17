import { useState } from "react";
import ContainerBox from "../Common/Container-Box";
import { AuthService } from "../../library/services/auth.service";
import PopUpModal from "../Common/PopUp-Modal";
import { useNavigate } from "react-router-dom";
import SparkButton from "../imports/Spark-Button";


export function Login() {
  const authService = new AuthService()
  const navigate = useNavigate()

  const [modal_data, setModalData] = useState({
    title: 'Information',
    context: 'Please try again',
    confirm_context: 'Retry',
    close_context: 'Close'
  })

  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);
  const [password, setPassword] = useState("");
  const [passBlur, setPassBlur] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [signup, setSignup] = useState(false)
  const [loginLoader, setLoginLoader] = useState(false)

  async function onSubmit() {
    setEmailBlur(true)
    setPassBlur(true)
    if(email.includes('@') && password.length >= 8) {
      await loginUser()
    }
  }

  function closeModal() {
    setOpenModal(false)
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
  }

  async function loginUser() {
    setLoginLoader(true)
    const body = {email, password}
    await authService.loginUser(body).then((response) => {
      // setTimeout(() => {
        setLoginLoader(false)
      // }, 1000)
      console.log(response)
      if(response && response.success){
        if(response.data.login) {
          sessionStorage.setItem("token", response.data.token)
          sessionStorage.setItem("email", email)
          navigate('/home')
        } else if (response.data.signup) {
          setOpenModal(true)
          setModalData({...modal_data, context: response.data.message, confirm_context: 'Sign-Up'})
          setSignup(true)
        } else {
          setOpenModal(true)
          setModalData({...modal_data, context: response.data.message, confirm_context: 'Retry'})
          setSignup(false)
        }
      }
    })
  }

  function openSignup(){
    closeModal()
    navigate('/signup')
  }

    return (
        <>
        <ContainerBox>
        <div className="container">
        <div className="">
          <h2 className="">Login</h2>
          <br></br>
          <form>
            <div className="mb-3">
              <div className="input-group flex-nowrap">
              <input type="email" className="form-control" value={email} placeholder="Your email"
                onChange={(event) => {setEmail(event.target.value)}}
                onBlur={() => {setEmailBlur(true)}}/>
              <span className="input-group-text shadow-btm" id="basic-addon2"><strong>@xyz.com</strong></span>
              </div>
              <div className="">
              {emailBlur && email.length === 0 && (<div className="form-text text-danger">Email is required</div>)}
              {emailBlur && email.length !== 0 && !email.includes("@") && (<div className="form-text text-danger">Enter a valid email</div>)}
              </div>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" value={password} placeholder="Password"
                onChange={(event) => {setPassword(event.target.value)}}
                onBlur={() => {setPassBlur(true)}}/>
                <div className="">
              {passBlur && password.length === 0 && (<div className="form-text text-danger">Password is required</div>)}
              {passBlur && password.length !== 0 && password.length < 8 && (<div className="form-text text-danger">Enter min 8 characters</div>)}
              </div>
            </div>
            <SparkButton name={'Login'} clickFunc={onSubmit} loading={loginLoader}></SparkButton>
          </form>
        </div>
      </div>
      {openModal && !signup && <PopUpModal modal_data={modal_data} close={closeModal} submit={closeModal}></PopUpModal>}
      {openModal && signup && <PopUpModal modal_data={modal_data} close={closeModal} submit={openSignup}></PopUpModal>}
        </ContainerBox>
        </>
    )
}
