import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NewUserView from './View/NewUserView';

const NewUser = ({closeWindow}) => {
    // Constats
    const dispatch = useDispatch();

    // States
    const [role, setRole] = useState(0);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [club, setClub] = useState('');
    const [category, setCategory] = useState('');
    const [judgeCategory, setJudgeCategory] = useState('');
    const [email, setEmail] = useState('');

    // Functions
    const handleRoleChange = (e) => setRole(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleLastnameChange = (e) => setLastname(e.target.value);
    const handlePatronymicChange = (e) => setPatronymic(e.targe.value);
    const handleClubChange = (e) => setClub(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleJudgeCategoryChange = (e) => setJudgeCategory(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = {name, email, patronymic, role};
        console.log('New user: ', data);
    }
    return (
        <NewUserView 
        role={role}
        name={name}
        lastname={lastname}
        patronymic={patronymic}
        club={club}
        category={category}
        judgeCategory={judgeCategory}
        email={email}
        setRole={handleRoleChange}
        setName={handleNameChange}
        setLastname={handleLastnameChange}
        setPatronymic={handlePatronymicChange}
        setClub={handleClubChange}
        setCategory={handleCategoryChange}
        setJudgeCategory={handleJudgeCategoryChange}
        setEmail={handleEmailChange}
        addUser={handleSubmitForm}
        closeWindow={closeWindow}/>
    )
}

export default NewUser
