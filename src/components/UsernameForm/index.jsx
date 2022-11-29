import React, { useState } from 'react'

const UsernameForm = ({ username, setUsername }) => {

    const [textInput, setTextInput ] = useState('')

    function handleChange(e) {
        setTextInput(e.target.value)
        console.log(textInput)
    }

    return (
        <form>
            <input type="text" value={textInput} onChange={handleChange} />
            <input type="submit" value='Login' />
        </form>
    )

}

export default UsernameForm
