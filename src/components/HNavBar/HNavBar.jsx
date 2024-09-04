import {
    NavLink,
} from 'react-router-dom'

// Styles 
import styles from './HNavBar.module.css'



export default function HNavBar() {


    const handleActive = ({isActive}) => {
        if (isActive) {
            return styles.navLink + " " + styles.active
        } else { 
            return styles.navLink
        }
    }

    return (
        <div className={styles.container} >
            <NavLink
                to="."
                end
                className={handleActive}

            >
                Dashboard
            </NavLink>
            <NavLink 
                to="income"
                className={handleActive}
            >
                Income
            </NavLink>
            <NavLink 
                to="products"
                className={handleActive}
            >
                Products
            </NavLink>
            <NavLink 
                to="reviews"
                className={handleActive}
            >
                Reviews
            </NavLink>
        </div>
    )
}