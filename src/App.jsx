import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { SignIn, Repo } from './pages'
<<<<<<< HEAD
import Layout from '../Layout'
=======
import Navbar from './layouts/Navbar'

>>>>>>> 18d3d786240a9ea5309f6cba4eaed0a9aa148d87

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')

  
  return (
<<<<<<< HEAD
    <Layout>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/:user" exact element={<Dashboard />} />
        <Route path="/:user/:repo" element={<Repo />} />
      </Routes>
    </Layout>
=======
    <>
    
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/:user" exact element={<Dashboard />} />
      <Route path="/:user/:repo" element={<Repo />} />
    </Routes>
    </>
    
>>>>>>> 18d3d786240a9ea5309f6cba4eaed0a9aa148d87
  )
}

export default App
