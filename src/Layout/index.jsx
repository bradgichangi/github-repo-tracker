import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {useLocation, NavLink, useParams} from 'react-router-dom'
import './styles.css'
const Layout = (props) => {
    const params = useParams()
    const { user, repo } = params
    const location = useLocation()
    console.log(user)
    console.log(repo)

    const renderLayout = () => {
        return (
            <>
                <nav className='site-nav'>
                <NavLink className="home-link" id='github-icon' to="/"><FontAwesomeIcon icon={faGithub}/></NavLink>
                <NavLink className="home-link" to={`/${user}`}>Dashboard</NavLink>
                <NavLink className="home-link" to="/">Switch User</NavLink>  
                </nav>
                {props.children}
            </>
        )
    }
  return (
    <>
        { location.pathname == '/' ?  props.children : renderLayout()}
    </>
  )
}

export default Layout