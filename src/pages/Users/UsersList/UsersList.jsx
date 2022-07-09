import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ROLES_FIND } from '../../../const/user_roles';
import usePagination from '../../../hooks/usePagination/usePagination';
import { setCurrent } from '../../../redux/features/counter/usersSlice';
import styles from './list.module.css';
import ListHeader from './ListHeader';
import Pagination from './Pagination';
import UserItem from './UserItem/UserItem';

const UsersList = ({roleFilter, users, selected, handleNewUserButton}) => {
    // Constants
    const dispatch = useDispatch();
    
    // States
    const [page, setPage] = useState(1);

    // Hooks
    const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(users[ROLES_FIND[roleFilter]].data, 1);

    // Functions

    // Effects
    // useEffect(()=>{
    //     dispatch(setCurrent({page, roleFilter}));
    // }, [roleFilter, page, dispatch])


    return (
        <div className={styles.holder_list}>
            <div className={styles.holder_inner}>
                <ListHeader
                selected={selected}
                users={users.users}/>
                <div className={styles.users_list_holder}>
                    <div className={styles.users_list_inner}>
                        {currentData().map((item)=>(
                           <UserItem
                            key={item.id} 
                            item={item}/>
                        ))}
                    </div>
                </div>
                <Pagination
                    max={maxPage}
                    onIndexClick={jump}
                    onNextClick={next}
                    onPrevClick={prev}
                    limitPerPage={1}
                    currentPage={currentPage}/>
            </div>
        </div>
    )
}

export default UsersList
