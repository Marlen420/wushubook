import React, { useState } from 'react'
import styles from './index.module.css'
import { Logo, PersonIcon, profilIcon, goOutIcon, peopleNotIcon, payloadClose, payload, NotificationIcon, MessageIcon, MousMesssage, photoPeople, MousNotification, MousPerson } from '../../images/inedex.js'
import { NavLink, useNavigate } from 'react-router-dom'
import Notificatons from '../Notificatons/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setLogOut } from '../../redux/features/counter/profileSlice'
import jwt_decode from "jwt-decode";


function Headers() {


    const navigations = useNavigate()
    const [isOpenNotificationIcon, setIsOpenNotificationIcon] = useState(false)
    const [isIconPerson, setIconPerson] = useState(PersonIcon)
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const [isOpenSalary, setIsOpenSalary] = useState(false)
    const [selesctClubs, setSelesctClubs] = useState('Все клубы')

    const { user } = useSelector(state => state.profile)

    const name = user.name.split('/')


    const toggleIsOpenNotificationIcon = () => {
        setIsOpenNotificationIcon(!isOpenNotificationIcon)
    }

    const toggleIsOpenMessage = () => {
        setIsOpenMessage(!isOpenMessage)
        navigations('/chat')

    }

    const togglingSalary = () => {
        setIsOpenSalary(!isOpenSalary)
    }


    const dispatch = useDispatch()
    const handleProfileNavigate = () => {

        setIsOpenSalary(!isOpenSalary)
        navigations('/profile')
    }
    const hanldeExitNavigate = () => {
        localStorage.removeItem('jwt-user')
        localStorage.removeItem('jwt-token')
        setIsOpenSalary(!isOpenSalary)
        dispatch(setLogOut())

    }

    const infoProfil = [{ icon: profilIcon, text: 'Профиль', onClick: handleProfileNavigate },
    { icon: goOutIcon, text: 'Выход', onClick: hanldeExitNavigate }]


    return (
        <div className={styles.header} >

            <div className={styles.headers1} >
                <NavLink to='/*'>     <img src={Logo} alt='' className={styles.header__logo} /> </NavLink>
                <h1 className={styles.headers__title}> Федерация традиционного ушу Кыргызской Республики </h1>

            </div>

            <div className={styles.header__allIcon} >
                {
                    isOpenMessage ?
                        <NavLink to='/chat'>    <img className={styles.header__icon}
                            onClick={toggleIsOpenMessage}
                            src={MousMesssage} alt='' /></NavLink>
                        :
                        <img className={styles.header__icon} src={MessageIcon}
                            onClick={toggleIsOpenMessage} alt='' />
                }

                {
                    isOpenNotificationIcon ?
                        <img className={styles.header__icon} onClick={toggleIsOpenNotificationIcon}
                            src={MousNotification} alt='' />
                        :
                        <img className={styles.header__icon} src={NotificationIcon}
                            onClick={toggleIsOpenNotificationIcon} alt='' />
                }




                <div className={styles.f} >
                    <div onClick={togglingSalary}>
                        {isOpenSalary ? <img src={payloadClose} alt='Not find ArrowDownIcon'
                            className={styles.arrowOpenIcon} />
                            :
                            <img src={payload} className={styles.arrow}
                                alt='Not find ArrowTopIcon' />}

                        <div className={styles.headers_profil}>
                            {
                                user.image ? <img src={user.image} alt='' className={styles.headers_profil_icon} /> :
                                    <img src={peopleNotIcon} alt='' className={styles.headers_profil_icon} />
                            }

                            <p className={styles.headers_profil_name}>{name[0]} </p >
                        </div>

                    </div >
                    {
                        isOpenSalary && (
                            <div>
                                <ul className={styles.headers_profil_pops} >
                                    {
                                        infoProfil.map(option => (
                                            <div className={styles.headers_profil_popsUp} onClick={option.onClick}  >
                                                <li className={styles.headers_profil_hover} key={Math.random()}>
                                                    <img src={option.icon} alt='' />

                                                </li >
                                                <li className={styles.headers_profil_hover} key={Math.random()}>
                                                    {option.text}

                                                </li >
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                </div>


                {/* 
                <img className={styles.header__icon} src={isIconPerson} alt=''
                    onMouseEnter={() => setIconPerson(MousPerson)}
                    onMouseOut={() => setIconPerson(PersonIcon)}
                    onClick={handleProfileNavigate} /> */}
            </div>


            {
                isOpenNotificationIcon && <Notificatons />
            }

        </div>
    )
}


export default Headers;
