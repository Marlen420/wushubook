import React, { useEffect } from 'react';
import styles from './index.module.css';
import { Time } from '../../../images/inedex.js'





function Main() {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = 'auto'
    }, [])

    return (

        <div className={styles.modal}  >
            <div className={styles.modal__content}>

                <div className={styles.content} >
                    <img src={Time} alt='' />
                    <h1 className={styles.content__title} >Доступ к сайту ограничен</h1>
                    <p className={styles.content__text}>Пожалуйста, ожидайте подтверждение вашего аккаунта администратором.</p>
                </div>

            </div>

        </div>
    )
}

export default Main;


