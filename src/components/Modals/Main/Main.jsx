import React from 'react';
import styles from './Main.module.css';
import { Time } from '../../../images/inedex.js'





function Main({ active, setActive }) {
    const isOpenModal = () => {
        setActive(false)
    }

    return (

        <div className={active ? styles.active : styles.modal}  >
            <div className={styles.modal__content}>

                <div className={styles.content} >
                    <img src={Time} alt='' />
                    <h1 className={styles.content__title} onClick={isOpenModal}>Доступ к сайту ограничен</h1>
                    <p className={styles.content__text}>Пожалуйста, ожидайте подтверждение вашего аккаунта администратором.</p>
                </div>

            </div>

        </div>
    )
}

export default Main;


