import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {useLocation, NavLink, useParams} from 'react-router-dom'
import './styles.css'
const Layout = (props) => {
    const params = useParams()
    const { user } = params
    const location = useLocation()
    const renderLayout = () => {
        console.log(user)
        return (
            <>
                <nav className='site-nav'>
                    <NavLink to="/">
                        <div className="home-link">
                            <FontAwesomeIcon icon={faGithub}/>
                            <span>Switch User</span>
                        </div>
                    </NavLink>
                    <NavLink className="home-link" to={`/${user}`}>Dashboard</NavLink>
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