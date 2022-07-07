import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import IconReaded from "../IconReaded/IconReaded";
import Time from "../Time/Time";
import orderBy from 'lodash/orderBy';
// import isToday from "date-fns/isToday";
import styles from './dialogs.modules.css'
import { Search, EditIconSideChatHeaders } from '../../images/inedex.js'



export const Dialogs = ({ items, onSearch, inputValue }) => {
    console.log("items: ", items)

    return (
        <div >

            {/* <div className={styles.dialogs__search}> */}

            {/* <input type='text' placeholder='Поиск...'
                className={styles.chat__sidebar_headers_search}
                value={inputValue}
                onChange={e => onSearch(e.target.value)}
            />


            <img src={Search} alt='Search Person'
                className={styles.chat__sidebar_headers_searchIcon} /> */}
            {/* </div> */}

            {orderBy(items, ["created_at"], ["desc"]).map(item => (

                <DialogItem
                    user={item.user}
                    // unreaded ={items.user.}
                    message={item}

                />
            ))}




        </div>

    )
}

// export default Dialogs