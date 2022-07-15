import { Star } from '@skbkontur/react-icons';
import React from 'react';
import styles from './style.module.css';

const ClubItem = ({item}) => {
    return (
        <div className={styles.item_holder}>
            <div style={{background: item.color}} className={styles.item_color}/>
            <div className={styles.item_content}>
                <p className={styles.item_title}>{`Клуб <<${item.title}>>`}</p>
                {item.trainers.map((item)=>(<p className={styles.item_trainer}>Тренер: {item}</p>))}
                <div className={styles.item_rating}>
                    <p className={styles.item_rating_title}>Рейтинг клуба</p>
                    <Star color={item.rating > 0 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={item.rating > 1 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={item.rating > 2 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={item.rating > 3 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={item.rating > 4 ? "#F1EB4D" : "#D9D9D9"}/>
                    <p className={styles.item_rating_subtitle}>{item.rating}</p>
                </div>
            </div>
        </div>
    )
}

const ClubsList = ({clubs}) => {
    return (
        <div className={styles.list_holder}>
            {clubs.map((item)=>(
                <ClubItem item={item}/>
            ))}
        </div>
    )
}

export default ClubsList
