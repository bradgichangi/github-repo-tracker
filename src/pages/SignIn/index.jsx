import React from "react";
import { UsernameForm } from "../../components";

const SignIn = ({ username, setUsername }) => {


    return (
        <div className="username-form">
            <h1>GitHub Repo Tracker</h1>
            <UsernameForm username={username} setUsername={setUsername} />
        </div>
    )
}

export default SignIn
