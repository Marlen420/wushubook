import React from "react";
import DialogItem from "../DialogItem/index.jsx";
import IconReaded from "../IconReaded/index.jsx";

import orderBy from 'lodash/orderBy';




export const Dialogs = ({ items, onSearch, inputValue }) => {
    console.log("itemsDialog: ", items)

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
                    user={item}
                    unreaded={items}
                    message={item}

                />
            ))}

        </div>

    )
}

// export default Dialogs