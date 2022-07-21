import React, { useEffect, useState } from 'react'
import styles from './index.module.css';
import {
    TimeIcon, CheckIcon, LocationsIcon, EmailIcon, TelephonIcon,
    PhotoMain
} from '../../images/inedex.js'
import { useDispatch, useSelector } from 'react-redux'
import { Oval, Circles } from 'react-loader-spinner'
import Footer from '../../components/Footer/index.jsx';

import OtherNews from '../News/OtherNews/OtherNews';
import Main from '../../components/Modals/Main';





function Home({ userStatus }) {

    const { status, error, newsEvents, lastEvents } = useSelector(state => state.main)


    return (
        <div className={styles.conteiner}>
            {userStatus === 1 &&
                <Main />}

            <div className={styles.conteiner__banner}>
                <img src={PhotoMain} alt=''
                    className={styles.conteiner__photo} />

            </div>

            <h1 className={styles.conteiner__title} >
                <span className={styles.conteiner__line} >
                    Мероприятия
                </span>
            </h1>
            <p className={styles.conteiner__tema}>Новые мероприятия:</p>

            {
                status == 'loading' && <div className={styles.spinner} >
                    <Oval
                        ariaLabel="loading-indicator"
                        height={100}
                        width={100}
                        strokeWidth={5}
                        strokeWidthSecondary={3}

                        color="lightblue"
                        secondaryColor="white"

                    />
                </div>
            }

            {
                error && <div className={styles.spinner} >{error}</div>
            }

            {
                newsEvents.Registering_Date_NewEvent?.map((item) =>
                    <div key={item.id} className={styles.wrapper}>

                        <article className={styles.wrapper__events}>
                            <img src={TimeIcon} alt='' className={styles.wrapper__icon} />

                            <div >
                                <h1 className={styles.wrapper__title} >{item.title} </h1>
                                <p className={styles.wrapper__city}>{item.city} </p>
                                <time className={styles.wrapper__time}>{item.allDataTime}</time>
                            </div>

                        </article>


                    </div>
                )
            }


            <p className={styles.conteiner__tema}>Предыдущие мероприятия:</p>
            {
                status === 'loading' && <div className={styles.spinner} >
                    <Oval
                        ariaLabel="loading-indicator"
                        height={100}
                        width={100}
                        strokeWidth={5}
                        strokeWidthSecondary={3}

                        color="lightblue"
                        secondaryColor="white"

                    />
                </div>
            }

            {error && <div className={styles.spinner} >{error}</div>}

            <div className={styles.content}>

                {
                    lastEvents.Registering_Date_Last_Event?.map(item =>
                        <article key={item.id} className={styles.wrapperLastEvents__lastEvents}>
                            <img src={CheckIcon} alt='' className={styles.wrapper__icon} />

                            <div className={styles.wrapperLastEvents__lastEvents2} >
                                <h1 className={styles.wrapper__title} >{item.title} </h1>
                                <p className={styles.wrapper__city}>{item.city} </p>
                                <time className={styles.wrapper__time}>{item.allDataTime}</time>
                            </div>
                        </article>
                    )
                }
            </div>
            <h1 className={`${styles.conteiner__title} ${styles.content__hight} `} >
                <span className={styles.conteiner__line} >
                    Новости
                </span></h1>

            <OtherNews />
            <Footer />

        </div >
    )
}

export default Home