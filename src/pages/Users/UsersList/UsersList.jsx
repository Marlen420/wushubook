import React from 'react';
import styles from './list.module.css';
import ListHeader from './ListHeader';
import Pagination from '../../../components/Pagination/index';
import UserItem from './UserItem/UserItem';

const UsersList = ({
    roleFilter, 
    users, 
    selected,
    isSelectedAll,
    isSelectedItem,
    onSelectAll,
    onSelectItem,
    currentData,
    currentPage,
    maxPage,
    jump,
    prev,
    next,
    handleNewUserButton,
}) => {


    return (
        <div className={styles.holder_list}>
            <div className={styles.holder_inner}>
                <ListHeader
                    onSelectAll={onSelectAll}
                    isSelectedAll={isSelectedAll}
                    isSelectedItem={isSelectedItem}/>
                <div className={styles.users_list_holder}>
                    <div className={styles.users_list_inner}>
                        {currentData().map((item)=>(
                           <UserItem
                                key={item.id}
                                item={item}
                                isSelectedItem={isSelectedItem}
                                onSelectItem={onSelectItem}/>
                        ))}
                    </div>
                </div>
                {maxPage > 1 &&
                <Pagination
                    max={maxPage}
                    onIndexClick={jump}
                    onNextClick={next}
                    onPrevClick={prev}
                    limitPerPage={1}
                    currentPage={currentPage}/>}
            </div>
        </div>
    )
}

export default UsersList
