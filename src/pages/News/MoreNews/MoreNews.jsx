import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OtherNews } from '../index.js'
import styles from './index.module.css'
import { Oval } from 'react-loader-spinner'
import Footer from '../../../components/Footer/index.jsx'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

function MoreNews() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("hello")
        window.scrollTo(0, 0);
    }, [pathname]);

    const { newsId, status } = useSelector(state => state.main)
    console.log("newId: ", newsId)


    return (
        <div>
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

            <div className={styles.content} key={newsId.id} >
                <img src={newsId.image} alt='' className={styles.content__image} />

                <div className={styles.content__info} >
                    <h1 className={styles.content__info_title}>{newsId.title}</h1>
                    <time className={styles.content__info_time}>{newsId.date}</time>


                    <p className={styles.content__info_text} >{newsId.text}</p>


                </div>

            </div>


            <div className={styles.newsOther}>
                <h1 className={styles.news_title}>Другие новости </h1>
                <OtherNews />
            </div>
            <Footer />
        </div >
    )
}


export default MoreNews