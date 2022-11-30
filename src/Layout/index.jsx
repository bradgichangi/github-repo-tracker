import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useLocation, NavLink } from 'react-router-dom'
import './styles.css'

const Layout = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const location = useLocation()

    useEffect(() => {
        if(!currentUser){
            setCurrentUser(location.pathname)
        }
    }, [currentUser, location])

    const renderLayout = () => {
        return (
            <>
                <nav className='site-nav'>
                <NavLink className="home-link" id='github-icon' to="/"><FontAwesomeIcon icon={faGithub}/></NavLink>
                <NavLink className="home-link" to={`/${currentUser}`}>Dashboard</NavLink>
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