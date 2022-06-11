import React, { useState } from 'react'
import styles from './Headers.module.css'
import { Logo, PersonIcon, NotificationIcon, MessageIcon, MousMesssage, MousNotification, MousPerson } from '../../images/inedex.js'
import { NavLink } from 'react-router-dom'

function Header() {

    const [isIconPerson, setIconPerson] = useState(PersonIcon)
    const [isIconMessage, setIconMessage] = useState(MessageIcon)
    const [isIconNotification, setNotification] = useState(NotificationIcon)

    return (
        <div className={styles.header} >
            <div  >
                <NavLink to='/*'>     <img src={Logo} alt='' className={styles.header__logo} /> </NavLink>

            </div>

            <div className={styles.header__allIcon} >
                <img className={styles.header__icon} src={isIconMessage} alt=''
                    onMouseEnter={() => setIconMessage(MousMesssage)}
                    onMouseOut={() => setIconMessage(MessageIcon)}
                />
                <img className={styles.header__icon} src={isIconNotification} alt=''
                    onMouseEnter={() => setNotification(MousNotification)}
                    onMouseOut={() => setNotification(NotificationIcon)} />

                <img className={styles.header__icon} src={isIconPerson} alt=''
                    onMouseEnter={() => setIconPerson(MousPerson)}
                    onMouseOut={() => setIconPerson(PersonIcon)} />
            </div>
        </div>
    )
}

export default Header