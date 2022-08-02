import React from 'react';
import styles from './style.module.css';

const Submissions = ({list, handleClubItemClick}) => {
    return (
        <div>
            <div className={styles.list_holder}>
                {list.map((item)=>(
                    <div 
                        key={item.id}
                        className={styles.list_item}
                        onClick={()=>handleClubItemClick(item.id)}>
                        <div className={styles.item_color_side} />
                        <div className={styles.item_info_side}>
                            <p className={styles.item_title}>{item.title}</p>
                            {item.trainers.map((item)=>(
                                <p key={item.id} className={styles.item_trainer}>Тренер: {item.name}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default Submissions
