import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { SignIn, Repo } from './pages'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')

  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/:user" exact element={<Dashboard />} />
      <Route path="/:user/:repo" element={<Repo />} />
    </Routes>
  )
}

export default App
