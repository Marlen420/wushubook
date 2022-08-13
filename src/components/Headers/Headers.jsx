import React, { useState } from 'react'
import styles from './index.module.css'
import {
    Logo, PersonIcon, profilIcon, goOutIcon, peopleNotIcon,
    payloadClose, payload, NotificationIcon, MessageIcon, MousMesssage,
    photoPeople, MousNotification, MousPerson
} from '../../images/inedex.js'
import { NavLink, useNavigate } from 'react-router-dom'
import Notificatons from '../Notificatons/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setLogOut } from '../../redux/features/counter/profileSlice'
import { useEffect } from 'react'


function Headers({ socket }) {
    const navigations = useNavigate()
    const dispatch = useDispatch()


    const [isOpenNotificationIcon, setIsOpenNotificationIcon] = useState(false);
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const [isOpenSalary, setIsOpenSalary] = useState(false)
    const [notificatons, setNotificatons] = useState([])
    const [iconMessage, setIconMessage] = useState(MessageIcon)


    const { user } = useSelector(state => state.profile)
    const getName = (name) => {
        const str = name.split('');
        str[str.findIndex((i) => i === '/')] = ' ';
        return str.join('');
    }


    useEffect(() => {
        // socket.on("getNotificatons", data => { 
        //     setNotificatons((prev) => [...prev, data])
        // })
        setNotificatons([
            {
                id: 1,
                text: 'Необходимо заполнить заявки для участия в соревнованиях',
                date: '1ч'
            },
            {
                id: 2,
                text: 'Сформирована судейская бригада',
                date: '4 мая'
            },
            {
                id: 3,
                text: 'Пользователь Антон Васильев отправил вам сообщение',
                date: '22 апреля'
            },
            {
                id: 4,
                text: 'Необходимо заполнить заявки для участия в соревнованиях',
                date: '16 апреля'
            },
            {
                id: 43,
                text: 'Пользователь Антон Васильев отправил вам сообщение',
                date: '22 апреля'
            },
            {
                id: 56,
                text: 'Необходимо заполнить заявки для участия в соревнованиях',
                date: '16 апреля'
            },

        ])

        window.location.pathname === '/chat' ?
            setIconMessage(MousMesssage)
            : setIconMessage(MessageIcon)

    }, [socket, window.location.pathname])




    const toggleIsOpenNotificationIcon = () => {
        setIsOpenNotificationIcon(true)


    }
    const toggleIsCloseNotificationIcon = () => {
        setIsOpenNotificationIcon(false)
        setNotificatons([])

    }

    const toggleIsOpenMessage = () => {
        setIsOpenMessage(!isOpenMessage)
        navigations('/chat')
    }

    const togglingSalary = () => {
        setIsOpenSalary(!isOpenSalary)
    }


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
                <NavLink to='/*'><img src={Logo} alt='' className={styles.header__logo} /> </NavLink>
                <h1 className={styles.headers__title}> Федерация традиционного ушу Кыргызской Республики </h1>
            </div>

            <div className={styles.header__allIcon} >

                <div className={styles.header__twoIcon} >

                    <NavLink to='/chat'>
                        <img className={styles.header__icon}
                            onClick={toggleIsOpenMessage}
                            src={iconMessage} alt='' />
                    </NavLink>


                    {
                        isOpenNotificationIcon ?

                            <div className={styles.header__notification} >
                                <img className={styles.header__icon}
                                    onClick={toggleIsCloseNotificationIcon}
                                    src={MousNotification} alt='' />
                                {
                                    notificatons.length > 0 &&
                                    <div className={styles.header__icon_conteiner}>
                                        <p className={styles.header__icon_count} > {notificatons.length}</p>
                                    </div>
                                }
                            </div>

                            :

                            <div className={styles.header__notification} >
                                <img className={styles.header__icon}
                                    onClick={toggleIsOpenNotificationIcon}
                                    src={NotificationIcon} alt='' />
                                {
                                    notificatons.length > 0 &&
                                    <div className={styles.header__icon_conteiner}>
                                        <p className={styles.header__icon_count} > {notificatons.length}</p>
                                    </div>
                                }
                            </div>
                    }


                </div>

                <div className={styles.f} >
                    <div onClick={togglingSalary}>
                        {isOpenSalary ? <img src={payloadClose} alt='Not find ArrowDownIcon'
                            className={styles.arrowOpenIcon} />
                            :
                            <img src={payload} className={styles.arrow}
                                alt='Not find ArrowTopIcon' />}

                        <div className={styles.headers_profil}>
                            {
                                user.image ? <img src={user.image} alt=''
                                    className={styles.headers_profil_icon} />
                                    :
                                    <img src={peopleNotIcon} alt=''
                                        className={styles.headers_profil_icon} />
                            }

                            <p className={styles.headers_profil_name}>{getName(user.name)} </p >
                        </div>

                    </div >
                    {
                        isOpenSalary && (
                            <div>
                                <ul className={styles.headers_profil_pops} >
                                    {
                                        infoProfil.map((option, index) => (
                                            <div key={index} className={styles.headers_profil_popsUp} onClick={option.onClick}  >
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

            </div>


            {
                isOpenNotificationIcon && <Notificatons notificatons={notificatons} />
            }

        </div>
    )
}


export default Headers;
