import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUsersList } from '../../api/users.api';
import { QUERY_ROLES, ROLES_FIND } from '../../const/user_roles';
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

    // States
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState(0);
    const [newUser, setNewUser] = useState(false);

    // Functions
    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleAddUser = () => setNewUser(true);
    const handleCloseNewUser = () => setNewUser(false);

    // Onload
    useEffect(()=>{
        if (!users[ROLES_FIND[roleFilter]].data) dispatch(setUsersList(QUERY_ROLES[roleFilter]))
    }, [roleFilter, dispatch, users])
    
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
                roleFilter={roleFilter}
                setRoleFilter={setRoleFilter}/>
            <UsersList
                roleFilter={roleFilter}
                selected={users.selected}
                users={users}
                addUser={handleAddUser}/>
        </div>
    )
}

export default Users;