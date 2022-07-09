import React, { useState } from "react";
import styles from './MainNews.module.css'
import { Fon } from '../../../images/inedex.js'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsId } from "../../../api/main";
//Новости 

function MainNews() {

    const { news, newsId } = useSelector(state => state.main)
    const dispatch = useDispatch()
    console.log("Ne: ", news)

    const navigations = useNavigate()
    let date = [
        {
            id: 1,
            images: Fon,
            date: '22.05.2022, 9:30',
            title: 'ОФИЦИАЛЬНО ОТКРЫТА ГЛОБАЛЬНАЯ КОЛЛЕКЦИЯ И ВЫСТАВКА ИЗОБРАЗИТЕЛЬНЫХ РАБОТ, СВЯЗАННЫХ С УШУ, «УШУ ВДОХНОВЛЯЕТ МИР»',
            text: 'Чтобы лучше способствовать развитию спорта ушу, начиная с 1 июня IWUF запустила долгосрочную коллекцию и выставку визуальных работ, связанных с ушу, для любителей ушу со всего мира. Это мероприятие будет продвигать ушу во всем мире среди широкого круга людей, а визуальный контент этого вида спорта будет воздействовать на аудиторию более эффективным и интересным образом. Эта инициатива побуждает больше любителей ушу демонстрировать богатые и разнообразные стили ушу с разных точек зрения с помощью персонализированных и творческих визуальных выражений.'
        },
        {
            id: 1,
            images: Fon,
            date: '22.05.2022, 9:30',
            title: 'ОФИЦИАЛЬНО ОТКРЫТА ГЛОБАЛЬНАЯ КОЛЛЕКЦИЯ И ВЫСТАВКА ИЗОБРАЗИТЕЛЬНЫХ РАБОТ, СВЯЗАННЫХ С УШУ, «УШУ ВДОХНОВЛЯЕТ МИР»',
            text: 'Чтобы лучше способствовать развитию спорта ушу, начиная с 1 июня IWUF запустила долгосрочную коллекцию и выставку визуальных работ, связанных с ушу, для любителей ушу со всего мира. Это мероприятие будет продвигать ушу во всем мире среди широкого круга людей, а визуальный контент этого вида спорта будет воздействовать на аудиторию более эффективным и интересным образом. Эта инициатива побуждает больше любителей ушу демонстрировать богатые и разнообразные стили ушу с разных точек зрения с помощью персонализированных и творческих визуальных выражений.'
        },
        {
            id: 1,
            images: Fon,
            date: '22.05.2022, 9:30',
            title: 'ОФИЦИАЛЬНО ОТКРЫТА ГЛОБАЛЬНАЯ КОЛЛЕКЦИЯ И ВЫСТАВКА ИЗОБРАЗИТЕЛЬНЫХ РАБОТ, СВЯЗАННЫХ С УШУ, «УШУ ВДОХНОВЛЯЕТ МИР»',
            text: 'Чтобы лучше способствовать развитию спорта ушу, начиная Чтобы лучше способствовать развитию спорта ушу, начиная с 1 июня IWUF запусЧтобы лучше способствовать развитию спорта ушу, начиная с 1 июня IWUF запус с 1 июня IWUF запустила долгосрочную коллекцию и выставку визуальных работ, связанных с ушу, для любителей ушу со всего мира. Это мероприятие будет продвигать ушу во всем мире среди широкого круга людей, а визуальный контент этого вида спорта будет воздействовать на аудиторию более эффективным и интересным образом. Эта инициатива побуждает больше любителей ушу демонстрировать богатые и разнообразные стили ушу с разных точек зрения с помощью персонализированных и творческих визуальных выражений.'
        }
    ]


    const readMore = (item) => {

        dispatch(getNewsId({ id: item.id, navigations }))

    }

    return (

        <div className={styles.news} >
            <h1 className={styles.news__title}>Последние новости</h1>

            <div className={styles.content}>
                {
                    news.map(item =>
                        <div className={styles.conteiner} key={item.id}>
                            <div className={styles.conteiner__imgCon} >
                                <img src={item.image} alt='' className={styles.conteiner__img} />
                            </div>

                            <div className={styles.conteiner__texst}>
                                <time className={styles.conteiner__texst_date}>{item.date}</time>
                                <h1 className={styles.conteiner__texst_title} >{item.title}</h1>
                                <p className={styles.conteiner__texst_text} >{item.text}</p>
                            </div>

                            <button className={styles.conteiner__about}
                                onClick={() => readMore(item)} > Читать далее </button>


                        </div>
                    )
                }
            </div>

            {/* <MainNews date={infoMore} /> */}
            <Footer />

        </div>
    )
}

export default MainNews;