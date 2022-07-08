import React, { useEffect } from 'react'
import styles from './NotRegisteredHome.module.css'
import { Logo } from '../../images/inedex.js'
import Footer from '../../components/Footer/Footer.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { getLastEvent, getNewEvent } from '../../api/main.js';

function NotRegisteredHome() {
    const dispatch = useDispatch()

    const { status, error, newsEvents, lastEvents } = useSelector(state => state.main)
    console.log("LasEvent: ", lastEvents)

    useEffect(() => {
        dispatch(getNewEvent())
        dispatch(getLastEvent())

    }, [dispatch])





    return (
        <div className={styles.conteiner}>

            <div className={styles.headers}>
                <img src={Logo} alt='' className={styles.headers__logo} />
                <h1 className={styles.headers__title}> Федерация традиционного ушу Кыргызской Республики </h1>
            </div>


            <h1 className={styles.conteiner__title} ><span className={styles.conteiner__line} >
                Мероприятия федерации
            </span></h1>

            <p className={styles.conteiner__tema}>Предстоящие мероприятия:</p>

            <div className={styles.content}>
                {
                    newsEvents.NotRegistering_Date_News_Event?.slice(0, 3).map(item =>

                        <div key={item.id} className={styles.content_block}>
                            <h1 className={styles.content__date}> {item.onlyDay} <span className={styles.content__data2}>{item.onlyMonth}</span></h1>
                            <h1 className={styles.content__title}>{item.title}</h1>
                            <p className={styles.content__time}>{item.startTimeFinish}</p>
                            <p className={styles.content__address}>{item.city}</p>


                        </div>
                    )
                }

            </div>






            <p className={styles.conteiner__tema2}> Предыдущие мероприятия:</p>

            <div className={styles.content}>
                {
                    lastEvents.NotRegistering_Date_Last_Event?.slice(0, 3).map((item) =>

                        <div key={item.id} className={styles.content_block}>
                            <h1 className={styles.content__date}> {item.onlyDay} <span className={styles.content__data2}>{item.onlyMonth}</span></h1>
                            <h1 className={styles.content__title}>{item.title}</h1>
                            <p className={styles.content__time}>{item.startTimeFinish}</p>
                            <p className={styles.content__address}>{item.address}</p>

                        </div>
                    )}

            </div>


            <Footer />


        </div>
    )
}


export default NotRegisteredHome