import React from 'react'
import styles from './NotRegisteredHome.module.css'
import { Logo } from '../../images/inedex.js'
import Footer from '../../components/Footer/Footer.jsx'


function NotRegisteredHome() {

    let UpcomingEvents = [
        {
            id: 1,
            date: '22 ',
            title: 'Чемпионат среди детей',
            time: '9:00-12:00',
            address: 'г. Бишкек, Национальный Центр детей и юношества «Сейтек»'
        },
        {
            id: 2,
            date: '22 ',
            title: 'Чемпионат среди детей',
            time: '9:00-12:00',
            address: 'г. Бишкек, Национальный Центр детей и юношества «Сейтек»'
        },
        {
            id: 3,
            date: '22 ',
            title: 'Чемпионат среди детей ',
            time: '9:00-12:00',
            address: 'г. Бишкек, Национальный Центр детей и юношества «Сейтек»'
        },


    ]

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
                    UpcomingEvents.map((item) =>

                        <div key={item.id} className={styles.content_block}>
                            <h1 className={styles.content__date}> {item.date} <span className={styles.content__data2}>июня</span></h1>
                            <h1 className={styles.content__title}>{item.title}</h1>
                            <p className={styles.content__time}>{item.time}</p>
                            <p className={styles.content__address}>{item.address}</p>

                        </div>
                    )}

            </div>






            <p className={styles.conteiner__tema2}> Предыдущие мероприятия:</p>

            <div className={styles.content}>
                {
                    UpcomingEvents.map((item) =>

                        <div key={item.id} className={styles.content_block}>
                            <h1 className={styles.content__date}> {item.date} <span className={styles.content__data2}>июня</span></h1>
                            <h1 className={styles.content__title}>{item.title}</h1>
                            <p className={styles.content__time}>{item.time}</p>
                            <p className={styles.content__address}>{item.address}</p>

                        </div>
                    )}

            </div>


            <Footer />


        </div>
    )
}


export default NotRegisteredHome