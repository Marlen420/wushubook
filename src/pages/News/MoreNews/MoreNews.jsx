import React from 'react'
import { useSelector } from 'react-redux'
import OtherNews from '../OtherNews/OtherNews.jsx'
import styles from './MoreNews.module.css'
import { Circles } from 'react-loader-spinner'
import Footer from '../../../components/Footer/Footer.jsx'

function MoreNews() {

    const { newsId, status } = useSelector(state => state.main)
    console.log("newId: ", newsId)


    return (
        < div >
            {
                status === 'loading' && <div className={styles.spinner} >
                    <Circles ariaLabel="loading-indicator" />
                </div>}


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