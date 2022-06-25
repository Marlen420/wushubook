import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './personal.module.css';

const PersonalInfo = ({
    name, setName,
    lastname, setLastname,
    email, setEmail,
    phone, setPhone,
    country, setCountry,
    city, setCity
}) => {
    return (
        <div className={styles.personal_dashboard}>
            <div className={styles.input_line}>
                <div className={styles.input_holder}>
                    <label htmlFor="name">Имя</label>
                    <Input
                    name="name"
                    type="text"
                    value={name}
                    onChange={setName}/>
                </div>
                <div className={styles.input_holder}>
                    <label htmlFor="lastname">Фамилия</label>
                    <Input
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={setLastname}/>
                </div>
            </div>
            <div className={styles.input_line}>
                <div className={styles.input_holder}>
                    <label htmlFor="phone">Номер телефона</label>
                    <Input
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={setPhone}/>
                </div>
                <div className={styles.input_holder}>
                    <label htmlFor="email">Почта</label>
                    <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={setEmail}/>
                </div>
            </div>
            <div className={styles.input_line}>
                <div className={styles.input_holder}>
                    <label htmlFor="country">Страна</label>
                    <Input
                    name="country"
                    type="text"
                    value={country}
                    onChange={setCountry}/>
                </div>
                <div className={styles.input_holder}>
                    <label htmlFor="city">Город</label>
                    <Input
                    name="city"
                    type="text"
                    value={city}
                    onChange={setCity}/>
                </div>
            </div>
            <div className={styles.button_holder}>
                <div className={styles.button}>
                    <Button>
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
