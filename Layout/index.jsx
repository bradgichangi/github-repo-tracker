import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {Link, useLocation} from 'react-router-dom'
const Layout = (props) => {
    const location = useLocation()
    const renderLayout = () => {
        return (
            <>
                <nav>
                    <Link to="/">
                        <FontAwesomeIcon icon={faGithub}/>
                    </Link>
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