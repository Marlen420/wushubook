import React, { useState } from 'react'
import PasswordDashboard from './password/PasswordDashboard';
import PersonalInfo from './personal/PersonalInfo';
import styles from './profile.module.css';

const Dashboard = ({
    name, lastname,
    phone, email,
    country, city,
    image
}) => {
    const [profileName, setProfileName] = useState(name ? name : '');
    const [profileLastname, setProfileLastname] = useState(lastname ? lastname : '');
    const [profilePhone, setProfilePhone] = useState(phone ? phone : '');
    const [profileEmail, setProfileEmail] = useState(email ? email : '');
    const [profileCountry, setProfileCountry] = useState(country ? country : '');
    const [profileCity, setProfileCity] = useState(city ? city : '');

    

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


    return (
        <div className={styles.dashboard}>
            <h1 className={styles.dashboard_title}>Личная переписка</h1>
            <PersonalInfo
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
            setCity={handleCityChange}/>
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
