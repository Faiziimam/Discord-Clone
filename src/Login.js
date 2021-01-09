import { Button } from '@material-ui/core';
import React from 'react'
import { auth,provider } from './firebase';
import "./Login.css";
function Login() {
    const signIn=()=>{
      auth.signInWithPopup(provider)
      .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="DiscordIMG"/>
            </div>
            <Button onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
