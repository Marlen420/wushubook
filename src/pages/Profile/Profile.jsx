import React from 'react';
import Dashboard from './Dashboard';
import ImageHolder from './ImageHolder';
import styles from './profile.module.css';

const profileData = {
    name: "Иван",
    lastname: 'Петров',
    phone: "996555111222",
    email: 'ivanpetrov@gmail.com',
    country: 'Кыргызстан',
    city: 'Бишкек'
}

const Profile = () => {
    return (
        <div className={styles.profile_page}>
            <ImageHolder/>
            <Dashboard
            name={profileData.name}
            lastname={profileData.lastname}
            phone={profileData.phone}
            email={profileData.email}
            country={profileData.country}
            city={profileData.city}/>
        </div>
    )
}

export default Profile
