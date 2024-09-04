import {
    useState,
} from 'react'

import { 
    Link,
    NavLink,
} from 'react-router-dom'


// styles
import vNavStyles from "./VNav.module.css"

const handleActive = ( {isActive} ) => {
    return isActive ? `${vNavStyles.active} + ${vNavStyles.navLink}` : vNavStyles.navLink;
}


export default function VNav() {
    const [ isLoggedIn, setIsLoggedIn ] = useState()

    


    return (
        <nav >
                <NavLink to="/" className={handleActive} >
                    <i className="fa-solid fa-house"></i>
                    Home
                </NavLink>
                <NavLink to="products" className={handleActive} >
                    <i className="fa-solid fa-bag-shopping"></i>
                    Products
                </NavLink>
                <NavLink to="host" className={handleActive} >
                    <i className="fa-solid fa-square-h"></i>
                    Host
                </NavLink>
                <NavLink to="login" className={handleActive} >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Login
                </NavLink>
                {/* <NavLink to="logout" className={handleActive} >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                </NavLink> */}
        </nav>
    )
}