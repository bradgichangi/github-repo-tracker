import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UsernameForm = ({ username, setUsername }) => {

    const [textInput, setTextInput ] = useState('')

    const navigate = useNavigate();

    function handleChange(e) {
        setTextInput(e.target.value)
        console.log(textInput)
    }

    function handleSubmit(e) { 
        e.preventDefault()
        setUsername(textInput)
        navigate(username);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={textInput} onChange={handleChange} />
            <input type="submit" value='Login' />
        </form>
    )

}

export default UsernameForm
