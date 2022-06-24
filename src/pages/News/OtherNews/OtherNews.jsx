import React from 'react'
import styles from './OtherNews.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Circles } from 'react-loader-spinner'
function OtherNews() {

    const { status, error, newsEvents, lastEvents, news } = useSelector(state => state.main)
    return (
        <div className={styles.conteinerNews}>
            {status === 'loading' && <div className={styles.spinner} >
                <Circles ariaLabel="loading-indicator" /> </div>}
            {error && <div className={styles.spinner} >{error}</div>}
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
    )
}


export default OtherNews;