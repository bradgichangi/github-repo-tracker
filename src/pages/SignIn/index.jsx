import React from "react";
import { UsernameForm } from "../../components";

const SignIn = ({ username, setUsername }) => {


    return (
        <>
            <h1>GitHub Repo Tracker</h1>
            <UsernameForm username={username} setUsername={setUsername} />
        </>
    )
}

export default SignIn
