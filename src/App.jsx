import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { SignIn } from './pages'

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
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
