import React, { useState } from "react";
import styles from './index.module.css'

import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsId } from "../../../api/main";
//Новости 

function MainNews() {

    const { news, newsId } = useSelector(state => state.main)
    const dispatch = useDispatch()


    const navigations = useNavigate()



    const readMore = (item) => {

        dispatch(getNewsId({ id: item.id, navigations }))

    }

    return (

        <div className={styles.conteiners} >

            <div className={styles.news}>
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

            </div>
            <Footer />

        </div>
    )
}

export default MainNews;