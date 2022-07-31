import React from 'react';
import styles from './style.module.css';

const Banner = ({club}) => {
    const { name, trainers } = club;
    return (
        <div className={styles.banner_holder}>
            <h1 className={styles.title}>Клуб {`<<${name}>>`}</h1>
            <p className={styles.subtitle}>Тренеры</p>
            {trainers.map((item)=>(
                <p className={styles.subtitle} key={item.id}>{item.name.split('/').join(' ')}</p>
            ))}
        </div>
    )
}

export default Banner;