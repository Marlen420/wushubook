import React from 'react';
import DocumentItem from '../DocumentItem/DocumentItem';
import styles from './style.module.css';

const DocumentList = ({
    Today,
    Yesterday,
    Other,
    deleteItem,
}) => {
    return (
        <div className={styles.list_holder}>
            { Today &&
            <div className={styles.series_listlist_series}>
                <p className={styles.list_title}>Сегодня</p>
                <div className={styles.item_list}>
                    {Today.map((item)=><DocumentItem key={item.id} item={item} deleteItem={deleteItem}/>)}
                </div>
            </div>}
            { Yesterday &&
            <div className={styles.series_listlist_series}>
                <p className={styles.list_title}>Вчера</p>
                <div className={styles.item_list}>
                    {Yesterday.map((item)=><DocumentItem key={item.id} item={item} deleteItem={deleteItem}/>)}
                </div>
            </div>}
            { Other &&
            <div className={styles.series_listlist_series}>
                <p className={styles.list_title}>Ранее</p>
                <div className={styles.item_list}>
                    {Other.map((item)=><DocumentItem key={item.id} item={item} deleteItem={deleteItem}/>)}
                </div>
            </div>}
        </div>
    )
}

export default DocumentList
