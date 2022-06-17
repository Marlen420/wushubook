import React, { useState } from "react";
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems.js'

import { Menu, Cross } from '../../images/inedex.js'

//Headers

function NavBar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div>

            <div onClick={handleClick} className={styles.menuIcon}>
                {clicked ?

                    <img src={Cross} alt='' className={styles.menu} />
                    :

                    <img src={Menu} alt='' className={styles.menu} />


                }


            </div>


            <ul className={clicked ? styles.Navbar__active :
                styles.navbar} >

                {MenuItems.map((item, index) => {
                    return (
                        < NavLink key={index} className={styles.navbar__link}
                            to={item.to} > {item.title}
                        </NavLink>


                    )
                })}

            </ul >
        </div >
    )
}

export default NavBar