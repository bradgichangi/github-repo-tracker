import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { SignIn } from './pages'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')

  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
