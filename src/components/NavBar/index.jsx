import React, { useState } from "react";
import styles from './index.module.css'
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems.js'
<<<<<<< HEAD:src/components/NavBar/NavBar.jsx
// import ReorderIcon from '@material-ui/icons/Reorder';
// import CloseIcon from '@material-ui/icons/Close';
=======

import { Menu, Cross } from '../../images/inedex.js'
>>>>>>> origin/dev2:src/components/NavBar/index.jsx

//Headers

function NavBar() {
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!isClicked)
    }

    return (
        <div>

            <div onClick={handleClick} className={styles.menuIcon}>
<<<<<<< HEAD:src/components/NavBar/NavBar.jsx
                {/* {clicked ?
                    <CloseIcon fontSize="large" />
                    :
                    <ReorderIcon fontSize="large" />} */}
=======
                {isClicked ?

                    <img src={Cross} alt='' className={styles.menu} />
                    // <p className={styles.menu}>&#10006;</p>
                    :

                    <img src={Menu} alt='' className={styles.menu} />
                    // <p className={styles.menu}> &#9776; </p>


                }

>>>>>>> origin/dev2:src/components/NavBar/index.jsx

            </div>


            <ul className={isClicked ? styles.Navbar__active :
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