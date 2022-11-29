import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { UsernameForm } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')

  function fetchGit() {
    fetch('https://api.github.com/users/bradgichangi/repos')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  fetchGit()

  return (
    <>
    <UsernameForm />
    </>
  )
}

export default App
