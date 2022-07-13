import React, { useState } from 'react'
import styles from './index.module.css'
import { Logo, PersonIcon, NotificationIcon, MessageIcon, MousMesssage, MousNotification, MousPerson } from '../../images/inedex.js'
import { NavLink, useNavigate } from 'react-router-dom'
import Notificatons from '../Notificatons/index.jsx'


function Header() {
    const navigations = useNavigate()
    const [isOpenNotificationIcon, setIsOpenNotificationIcon] = useState(false)
    const [isIconPerson, setIconPerson] = useState(PersonIcon)
    const [isOpenMessage, setIsOpenMessage] = useState(false)


    const toggleIsOpenNotificationIcon = () => {
        setIsOpenNotificationIcon(!isOpenNotificationIcon)
    }

    const toggleIsOpenMessage = () => {
        setIsOpenMessage(!isOpenMessage)
        navigations('/chat')

    }

    const handleProfileNavigate = () => navigations('/profile');

    return (
        <div className={styles.header} >

            <div className={styles.headers1} >
                <NavLink to='/*'>     <img src={Logo} alt='' className={styles.header__logo} /> </NavLink>
                <h1 className={styles.headers__title}> Федерация традиционного ушу Кыргызской Республики </h1>

            </div>

            <div className={styles.header__allIcon} >
                {
                    isOpenMessage ?
                        <NavLink to='/chat'>    <img className={styles.header__icon} onClick={toggleIsOpenMessage}
                            src={MousMesssage} alt='' /></NavLink>
                        :
                        <img className={styles.header__icon} src={MessageIcon}
                            onClick={toggleIsOpenMessage} alt='' />
                }



                {/* <img className={styles.header__icon} src={isIconMessage} alt=''
                    onMouseEnter={() => setIconMessage(MousMesssage)}
                    onMouseOut={() => setIconMessage(MousMesssage)}
                /> */}
                {
                    isOpenNotificationIcon ?
                        <img className={styles.header__icon} onClick={toggleIsOpenNotificationIcon}
                            src={MousNotification} alt='' />
                        :
                        <img className={styles.header__icon} src={NotificationIcon}
                            onClick={toggleIsOpenNotificationIcon} alt='' />
                }


                <img className={styles.header__icon} src={isIconPerson} alt=''
                    onMouseEnter={() => setIconPerson(MousPerson)}
                    onMouseOut={() => setIconPerson(PersonIcon)}
                    onClick={handleProfileNavigate}/>
            </div>


            {
                isOpenNotificationIcon && <Notificatons />
            }

        </div>
    )
}

export default Header
