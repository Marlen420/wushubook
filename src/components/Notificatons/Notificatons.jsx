import React from "react";
import styles from './Notificatons.module.css'

function Notificatons() {
    let array = [
        {
            id: 1,
            text: 'Необходимо заполнить заявки для участия в соревнованиях',
            date: '1ч'
        },
        {
            id: 2,
            text: 'Сформирована судейская бригада',
            date: '4 мая'
        },
        {
            id: 3,
            text: 'Пользователь Антон Васильев отправил вам сообщение',
            date: '22 апреля'
        },
        {
            id: 4,
            text: 'Необходимо заполнить заявки для участия в соревнованиях',
            date: '16 апреля'
        },
        {
            id: 3,
            text: 'Пользователь Антон Васильев отправил вам сообщение',
            date: '22 апреля'
        },
        {
            id: 4,
            text: 'Необходимо заполнить заявки для участия в соревнованиях',
            date: '16 апреля'
        },

    ]

    return (
        <div className={styles.notificatons__conteiner} >

            <div> </div>

            <div className={styles.notifications}>


                <h1 className={styles.notificatons__title}>Уведомления</h1>
                <ul className={styles.notifications__ul} >
                    {
                        array.map(item => (
                            <div className={styles.notifications__ul_i}  >
                                <div className={styles.notifications__ul_text}>
                                    <h1 className={styles.notifications__ul_tochka} > </h1>
                                    <p className={styles.notifications__ul_li} >{item.text}</p>
                                </div>
                                <p className={styles.notifications__ul_li1}>{item.date} </p>
                            </div>
                        )
                        )
                    }
                </ul >



            </div>


        </div>
    )
}


export default Notificatons