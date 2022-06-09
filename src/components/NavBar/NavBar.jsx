import React, { useState } from "react";
import styles from './NavBar.modules.css'
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems.js'

//Headers

function NavBar() {
    const [clicked, setClicked] = useState(false)

    return (
        <div>




            <ul className={styles.Navbar} >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            < NavLink to={item.to} > {item.title}
                            </NavLink>
                        </li>

                    )
                })}



            </ul >
        </div >
    )
}

export default NavBar