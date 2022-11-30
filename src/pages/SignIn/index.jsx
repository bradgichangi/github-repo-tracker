import React from "react";
import { UsernameForm } from "../../components";

const SignIn = ({ username, setUsername }) => {


    return (
        <div id='background'>
            <img src='https://wallpaperaccess.com/full/3414990.jpg' alt="github-background" />
            <div className="username-form">
                <p>Welcome to the</p>
                <h1>GitHub Repo Tracker</h1>
                <UsernameForm username={username} setUsername={setUsername} />
            </div>
        </div>
        
    )
}

export default SignIn
