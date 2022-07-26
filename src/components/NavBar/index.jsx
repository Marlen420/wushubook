import React, { useState } from "react";
import styles from './index.module.css'
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems.js'
import { Menu, Cross } from '../../images/inedex.js';
import { useSelector } from 'react-redux'

//Headers

function NavBar() {
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!isClicked)
    }

    const { user } = useSelector(state => state.profile)

    return (
        <div>

            <div onClick={handleClick} className={styles.menuIcon}>
                {isClicked ?

                    <img src={Cross} alt='' className={styles.menu} />
                    :
                    <img src={Menu} alt='' className={styles.menu} />
                }
            </div>

            <ul className={isClicked ? styles.Navbar__active :
                styles.navbar} >

                {
                    MenuItems.map((item, index) => {
                        return (
                            item.title === 'Пользователи' && user.role !== 'admin' ||
                            <NavLink key={index} className={styles.navbar__link}
                                to={item.to} > {item.title} </NavLink>

                        )
                    })
                }
            </ul >
        </div >
    )
}

export default NavBar