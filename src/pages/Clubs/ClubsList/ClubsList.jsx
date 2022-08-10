import { Star } from '@skbkontur/react-icons';
import React from 'react';
import Pagination from '../../../components/Pagination';
import styles from './style.module.css';

const ClubItem = ({item, clubClick}) => {
    const handleClick = () => clubClick(item.id);
    return (
        <div className={styles.item_holder} onClick={handleClick}>
            <div style={{background: `#${item.options}`}} className={styles.item_color}/>
            <div className={styles.item_content}>
                <p className={styles.item_title}>{`Клуб <<${item.name}>>`}</p>
                {item.trainers?.map((item, i)=>(<p key={item.id} className={styles.item_trainer}>Тренер: {item.name.split('/').join(' ')}</p>))}
                <div className={styles.item_rating}>
                    <p className={styles.item_rating_title}>Рейтинг клуба</p>
                    <Star color={(item.rating || 4) > 0 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={(item.rating || 4) > 1 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={(item.rating || 4) > 2 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={(item.rating || 4) > 3 ? "#F1EB4D" : "#D9D9D9"}/>
                    <Star color={(item.rating || 4) > 4 ? "#F1EB4D" : "#D9D9D9"}/>
                    <p className={styles.item_rating_subtitle}>{item.ratin || null}</p>
                </div>
            </div>
        </div>
    )
}

const ClubsList = ({clubs, clubClick, maxPage, prev, next, jump, perPage, currentPage}) => {
    return (
        <>
        <div className={styles.list_holder}>
            {clubs().map((item, index)=>(
                <ClubItem clubClick={clubClick} key={item.id} item={item}/>
            ))}
        </div>
        <div style={{width: '96%', margin: 'auto'}}>
            {
                maxPage > 1 &&
                <Pagination 
                currentPage={currentPage}
                limitPerPage={perPage}
                onIndexClick={jump}
                onNextClick={next}
                onPrevClick={prev}
                max={maxPage}/>
            }
        </div>
        </>
    )
}

export default ClubsList;