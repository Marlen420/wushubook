import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import NewUserView from './View/NewUserView';

const NewUser = ({closeWindow}) => {
    // Constats
    // const dispatch = useDispatch();

    // States
    const [role, setRole] = useState(0);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [club, setClub] = useState('');
    const [category, setCategory] = useState('');
    const [judgeCategory, setJudgeCategory] = useState('');
    const [email, setEmail] = useState('');

    // Functions
    const handleRoleChange = (e) => setRole(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const handelCityChange = (e) => setCity(e.target.value);
    const handleLastnameChange = (e) => setLastname(e.target.value);
    const handlePatronymicChange = (e) => setPatronymic(e.targe.value);
    const handleClubChange = (e) => setClub(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleJudgeCategoryChange = (e) => setJudgeCategory(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = {name: name+'/'+lastname, email, role, club, category};
        console.log('New user: ', data);
        // dispatch();
    }

    // Onload
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>document.body.style.overflow = 'auto';
    }, [])


    return (
        <NewUserView 
        role={role}
        name={name}
        lastname={lastname}
        country={country}
        city={city}
        patronymic={patronymic}
        club={club}
        category={category}
        judgeCategory={judgeCategory}
        email={email}
        setRole={handleRoleChange}
        setName={handleNameChange}
        setLastname={handleLastnameChange}
        setCountry={handleCountryChange}
        setCity={handelCityChange}
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