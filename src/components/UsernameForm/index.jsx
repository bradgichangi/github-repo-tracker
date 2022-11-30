import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UsernameForm = () => {

    const [textInput, setTextInput ] = useState('')

    const navigate = useNavigate();

    function handleChange(e) {
        setTextInput(e.target.value)
    }

    function handleSubmit(e) { 
        e.preventDefault()
        navigate(`/${textInput}`, {state: textInput});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id='username-input' type="text" placeholder='Enter username...' value={textInput} onChange={handleChange} />
            <input id='submit-btn' type="submit" value='Enter' />
        </form>
    )

}

export default UsernameForm
