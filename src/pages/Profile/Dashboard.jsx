import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUpdateUser } from '../../api/login.api';
import PasswordDashboard from './password/PasswordDashboard';
import PersonalInfo from './personal/PersonalInfo';
import styles from './profile.module.css';

const getName = (name) => {
    const str = name.split('');
    const ind = str.findIndex((i)=>i==='/');
    return name.slice(0, ind);
}

const getLastname = (name) => {
    const str = name.split('');
    const ind = str.findIndex((i)=>i==='/');
    return name.slice(ind+1, name.length);
}

const Dashboard = ({
    name,
    phone, email,
    country, city,
    image, status,
    id
}) => {
    const dispatch = useDispatch();
    const [profileName, setProfileName] = useState(name ? getName(name) : '');
    const [profileLastname, setProfileLastname] = useState(name ? getLastname(name) : '');
    const [profilePhone, setProfilePhone] = useState(phone ? phone : '');
    const [profileEmail, setProfileEmail] = useState(email ? email : '');
    const [profileCountry, setProfileCountry] = useState(country ? country : '');
    const [profileCity, setProfileCity] = useState(city ? city : '');
    const [profileImage, setProfileImage] = useState(image);


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    const handleNameChange = (e) => setProfileName(e.target.value);
    const handleLastnameChange = (e) => setProfileLastname(e.target.value);
    const handlePhoneChange = (e) => setProfilePhone(e.target.value);
    const handleEmailChange = (e) => setProfileEmail(e.target.value);
    const handleCountryChange = (e) => setProfileCountry(e.target.value);
    const handleCityChange = (e) => setProfileCity(e.target.value);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);


    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log('Update');
        const newName = profileName + '/' + profileLastname;
        const data = {
            name: newName,
            phone: profilePhone,
            email: profileEmail,
            country: profileCountry,
            city: profileCity,
            appointment_date: ''
        }
        dispatch(setUpdateUser({id: JSON.stringify(id), data}));
    }

    return (
        <div className={styles.dashboard}>
            {/* Profile Data */}
            <h1 className={styles.dashboard_title}>Личная переписка</h1>
            <PersonalInfo
            status={status}
            name={profileName}
            setName={handleNameChange}
            lastname={profileLastname}
            setLastname={handleLastnameChange}
            phone={profilePhone}
            setPhone={handlePhoneChange}
            email={profileEmail}
            setEmail={handleEmailChange}
            country={profileCountry}
            setCountry={handleCountryChange}
            city={profileCity}
            setCity={handleCityChange}
            handleSubmitForm={handleUpdateProfile}/>

            {/* Profile password */}
            <h1 className={styles.dashboard_title}>Изменения пароля</h1>
            <PasswordDashboard
            password={password}
            setPassword={handlePasswordChange}
            confirmPassword={confirmPassword}
            setConfirmPassword={handleConfirmPasswordChange}
            newPassword={newPassword}
            setNewPassword={handleNewPasswordChange}/>
        </div>
    )
}

export default Dashboard
