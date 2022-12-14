import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { SignIn, Repo, Unknown } from './pages'
import Layout from './Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/:user" exact element={<Dashboard />} />
        <Route path="/:user/:repo" element={<Repo />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </Layout>
  )
}

export default App
