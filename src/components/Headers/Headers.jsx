import React, { useState } from 'react'
import styles from './Headers.module.css'
import { Logo, PersonIcon, NotificationIcon, MessageIcon, MousMesssage, MousNotification, MousPerson } from '../../images/inedex.js'
import { NavLink } from 'react-router-dom'
import Notificatons from '../Notificatons/Notificatons'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isIconPerson, setIconPerson] = useState(PersonIcon)
    const [isIconMessage, setIconMessage] = useState(MessageIcon)
    const [isIconNotification, setNotification] = useState(NotificationIcon)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.header} >

            <div className={styles.headers1} >
                <NavLink to='/*'>     <img src={Logo} alt='' className={styles.header__logo} /> </NavLink>
                <h1 className={styles.headers__title}> Федерация традиционного ушу Кыргызской Республики </h1>

            </div>

            <div className={styles.header__allIcon} >
                <img className={styles.header__icon} src={isIconMessage} alt=''
                    onMouseEnter={() => setIconMessage(MousMesssage)}
                    onMouseOut={() => setIconMessage(MessageIcon)}
                />
                {
                    isOpen ? <img className={styles.header__icon} onClick={toggleIsOpen} src={MousNotification} alt='' />
                        :
                        <img className={styles.header__icon} src={NotificationIcon} onClick={toggleIsOpen} alt='' />
                }
                {/* <img className={styles.header__icon} src={isIconNotification} alt=''
                    onMouseEnter={() => setNotification(MousNotification)}
                    onMouseOut={() => setNotification(NotificationIcon)}
                    onClick={toggleIsOpen}
                /> */}

                <img className={styles.header__icon} src={isIconPerson} alt=''
                    onMouseEnter={() => setIconPerson(MousPerson)}
                    onMouseOut={() => setIconPerson(PersonIcon)} />
            </div>


            {
                isOpen && <Notificatons />
            }

        </div>
    )
}

export default Header