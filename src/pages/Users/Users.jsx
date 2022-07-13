import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersList } from '../../api/users.api';
import { QUERY_ROLES, ROLES_FIND } from '../../const/user_roles';
import usePagination from '../../hooks/usePagination/usePagination';
import { setSelectAll, setSelectItem, setUnselectAll, setUnselectItem } from '../../redux/features/counter/usersSlice';
import NewUser from './NewUser/NewUser';
import styles from './Users.module.css'
import UsersHeader from './UsersHeader/UsersHeader';
import Confirm from './UsersList/Confirm/Confirm';
import UsersList from './UsersList/UsersList';
import UsersNav from './UsersNav/UsersNav';

//Пользователи

function Users() {
    // Constants
    const dispatch = useDispatch();
    const { users } = useSelector(state=>state);
    const { selected } = users;

    // States
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState(0);
    const [newUser, setNewUser] = useState(false);
    
    // Hooks
    const { 
        currentData, 
        currentPage,
        maxPage, 
        jump,
        next,
        prev
    } = usePagination((users[ROLES_FIND[roleFilter]].data || []), 10);


    // Onload
    useEffect(()=>{
        if (!users[ROLES_FIND[roleFilter]].data) dispatch(setUsersList(QUERY_ROLES[roleFilter]))
    }, [roleFilter, dispatch, users])

    // Functions
    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleAddUser = () => setNewUser(true);
    const handleCloseNewUser = () => setNewUser(false);

    const isSelectedItem = useCallback((id)=>{
        if (selected.length === 0) return false;
        for (let i of selected){
            if (i === id) return true;
        }
        return false;
    }, [selected]);

    const isSelectedAll = useCallback(() => {
        if (currentData().length === 0) return false;
        for (let i of currentData()) {
            if (!selected.includes(i.id)) return false;
        }
        return true;
    }, [selected, currentData])
    
    const getAllId = useCallback(() => currentData().map(item=>item.id), [currentData]);

    const onSelectItem = useCallback((id) => isSelectedItem(id) ? dispatch(setUnselectItem(id)) : dispatch(setSelectItem(id)), [dispatch, isSelectedItem])
    const onSelectAll = useCallback(() => isSelectedAll() ? dispatch(setUnselectAll()) : dispatch(setSelectAll(getAllId())), [dispatch, isSelectedAll,  getAllId])

    // Debug

    return (
        <div className={styles.content}>
            {newUser &&
            <NewUser closeWindow={handleCloseNewUser}/>}
            {users.user.deleteId &&
            <Confirm/>}

            <UsersHeader
                search={search}
                setSearch={handleSearchChange}/>
            <UsersNav
                handleNewUserButton={handleAddUser}
                roleFilter={roleFilter}
                setRoleFilter={setRoleFilter}/>
            <UsersList
                roleFilter={roleFilter}
                selected={users.selected}
                isSelectedItem={isSelectedItem}
                isSelectedAll={isSelectedAll}
                onSelectItem={onSelectItem}
                onSelectAll={onSelectAll}
                currentData={currentData}
                currentPage={currentPage}
                maxPage={maxPage}
                jump={jump}
                prev={prev}
                next={next}
                addUser={handleAddUser}/>
        </div>
    )
}

export default Users;