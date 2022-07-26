import React from 'react';
import styles from '../../index.module.css';
import { Search, EditIconSideChatHeaders, people } from '../../../../images/inedex.js'

const DialogsHeader = ({ search, setSearch }) => {
    return (
        <div className={styles.chat__sidebar_headers}>
            <input 
                type='text' 
                value={search}
                onChange={setSearch}
                placeholder='Поиск...'
                className={styles.chat__sidebar_headers_search} />
            <img src={Search} alt='Search Person'
                className={styles.chat__sidebar_headers_searchIcon} />
            <div className={styles.chat__sidebar_headers_form}>
                <img src={EditIconSideChatHeaders} alt=''
                    className={styles.chat__sidebar_headers_formIcon} />
            </div>
        </div>
    )
}

export default DialogsHeader
