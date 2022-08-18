import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSportsmanById } from '../../api/club.api';
import styles from './style.module.css';

const Sportsman = () => {
    const { id } = useParams();
    const { currentSportsman } = useSelector(state=>state.clubs);
    const dispatch = useDispatch();
    console.log(currentSportsman);

    useEffect(()=>{
        dispatch(getSportsmanById(id));
    }, [])

    return (
        <>
            {
                currentSportsman &&
                <div className={styles.page_holder}>
                    <div className={styles.personal_info}>
                        <h2 className={styles.header_title}>Личная информация</h2>
                        <div className={styles.card}>
                            <p className={styles.card_title}>{currentSportsman.name.split('/').join(' ')}</p>
                            <p className={styles.card_club_title}>Клуб {`<<Название клуба>>`}</p>
                        </div>
                        <div className={styles.card}></div>
                    </div>
                    <div className={styles.achievement}>
                        <h2 className={styles.header_title}>Достижения</h2>
                        <div className={styles.card}></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sportsman;