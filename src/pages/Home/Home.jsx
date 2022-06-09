import React from 'react'
import styles from './Home.module.css';
import TimeIcon from '../../images/timeClock.svg'
import CheckIcon from '../../images/CheckIcon.svg'
import ImagesCunFu from '../../images/images.svg'
import LocationsIcon from '../../images/locations.svg'
import EmailIcon from '../../images/Email.svg'
import TelephonIcon from '../../images/telefon.svg'

function Home() {
    let newEvents = [
        {
            id: 3,
            title: 'Мировой чемпионат среди детей по ушу ',
            city: 'Бишкек  ',
            date: '22.07.2022, 9:00'
        }

    ]

    let lastEvents = [
        {
            id: 2,
            title: 'Мировой чемпионат среди детей по ушу',
            city: 'Бишкек',
            date: '22.07.2022, 9:00'
        },
        {
            id: 3,
            title: 'Мировой чемпионат среди детей по ушу',
            city: 'Бишкек',
            date: '22.07.2022, 9:00'
        }

    ]


    let news = [
        {
            id: '4',
            images: ImagesCunFu, // url
            title: 'Определились чемпионы республики по традиционному ушу',
            texst: 'С 11 по 14 апреля 2021 г. в г. Бишкек прошел чемпионат Кыргызской Республики по традиционному ушу, посвященный 30-летию независимости Кыргызстана и 85 летию Национального Центра детей и юношества «Сейтек».',
            date: '12.06.2021 06:04'
        },
        {
            id: '7',
            images: ImagesCunFu, // url
            title: 'Определились чемпионы республики по традиционному ушу',
            texst: 'С 11 по 14 апреля 2021 г. в г. Бишкек прошел чемпионат Кыргызской Республики по традиционному ушу, посвященный 30-летию независимости Кыргызстана и 85 летию Национального Центра детей и юношества «Сейтек». С 11 по 14 апреля 2021 г. в г. Бишкек прошел чемпионат Кыргызской Республики по традиционному ушу, посвященный 30-летию независимости Кыргызстана и 85 летию Национального Центра детей и юношества «Сейтек»С 11 по 14 апреля 2021 г. в г. Бишкек прошел чемпионат Кыргызской Республики по традиционному ушу, посвященный 30-летию независимости Кыргызстана и 85 летию Национального Центра детей и юношества «Сейтек»',
            date: '12.06.2021 06:04'
        }, {
            id: '8',
            images: ImagesCunFu, // url
            title: 'Определились чемпионы республики по традиционному ушу',
            texst: 'С 11 по 14 апреля 2021 г. в г. Бишкек прошелушу, посвященный 30-ла детей и юношреля 2021 г. в г. Бишкек прошел чемпионат Кыргызской Республики по традиционному ушу, посвященный 30-летию независимости Кыргызстана и 85 летию Национального »',
            date: '12.06.2021 06:04'
        }
    ]

    return (
        <div className={styles.conteiner} >

            <h1 className={styles.conteiner__title} ><span className={styles.conteiner__line} >
                Мероприятия
            </span></h1>
            <p className={styles.conteiner__tema}>Новые мероприятия:</p>
            {
                newEvents.map(item =>
                    <div key={item.id} className={styles.wrapper}>

                        <article className={styles.wrapper__events}>
                            <img src={TimeIcon} alt='' className={styles.wrapper__icon} />

                            <div >
                                <h1 className={styles.wrapper__title} >{item.title} </h1>
                                <p className={styles.wrapper__city}>{item.city} </p>
                                <time className={styles.wrapper__time}>{item.date}</time>
                            </div>

                        </article>


                    </div>
                )
            }


            <p className={styles.conteiner__tema}>Предыдущие мероприятия:</p>

            <div className={styles.content}>
                {
                    lastEvents.map(item =>
                        <article key={item.id} className={styles.wrapperLastEvents__lastEvents}>
                            <img src={CheckIcon} alt='' className={styles.wrapper__icon} />

                            <div className={styles.wrapperLastEvents__lastEvents2} >
                                <h1 className={styles.wrapper__title} >{item.title} </h1>
                                <p className={styles.wrapper__city}>{item.city} </p>
                                <time className={styles.wrapper__time}>{item.date}</time>
                            </div>

                        </article>


                    )
                }
            </div>
            <h1 className={`${styles.conteiner__title} ${styles.content__hight} `} ><span className={styles.conteiner__line} >
                Новости
            </span></h1>

            <div className={styles.conteinerNews} >
                {
                    news.map(item =>
                        <article key={item.id} className={styles.conteinerNews__block} >
                            <img src={item.images} alt='' className={styles.conteinerNews__images} />
                            <div className={styles.conteinerNews__allNews} >
                                <h1 className={styles.conteinerNews__title}>{item.title}</h1>
                                <p className={styles.conteinerNews__text}>{item.texst}</p>
                                <time className={styles.conteinerNews__date} >{item.date}</time>

                            </div>
                        </article>
                    )
                }
            </div>

            <footer className={styles.footer} >

                <div className={styles.footer__address}>

                    <img src={LocationsIcon} alt='' className={styles.footer__locationsImages} />

                    <div className={styles.footer__allText} >
                        <h1 className={styles.footer__title}>Адрес Главного центра ФТУКР:</h1>
                        <p className={styles.footer__text} >ул. Абдумомунова, д. 197</p>
                        <p className={styles.footer__text} >Национальный Центр детей и юношества «Сейтек»</p>
                    </div>
                </div>



                <div className={styles.footer__contact} >

                    <div className={styles.footer__contact_phone}>
                        <img src={TelephonIcon} alt='' />


                        <div className={styles.footer__contact__number} >
                            <h1 className={styles.footer__contact_text} >Контактные телефоны:</h1>
                            <p className={styles.footer__phone}>(+996 312) 66 29 14</p>
                            <p className={styles.footer_phone}>(+996 554) 40 44 51</p>
                        </div>
                    </div>


                    <div className={styles.footer__contact_phone}>
                        <img src={EmailIcon} alt='' />


                        <div className={styles.footer__contact__number} >
                            <h1 className={styles.footer__contact_text} >E-mail:</h1>
                            <p className={styles.footer__phone}>wuseitek@mail.ru</p>

                        </div>
                    </div>


                </div>

            </footer>





        </div>
    )
}

export default Home