import { Button } from "@material-ui/core";
import {auth, provider} from "../firebase";
import "./Login.css";


export default function Login() {

  function login() {
    auth.signInWithRedirect(provider)
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src="./login-logo.png" alt="login" />
          <div className="login__text">
            <h1>Signin with WhatsApp</h1>
          </div>
          <Button onClick={login}>Signin with Google</Button>
        </div>
      </div>
    </div>
  )
}
