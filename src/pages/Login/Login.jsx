import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authorization from './Authorization/Authorization'
import Registration from './Registration/Registration'
import styles from './Login.module.css';
import {BackgroundImage} from '../../images/inedex';

const Login = () => {
  return (
    <div className={styles.login_page}>
        <div className={styles.left_side}>
            <img src={BackgroundImage} alt="background image" className={styles.img_holder} />
        </div>
        <div className={styles.right_side}>
            <Routes>
                <Route path="/sign-in" element={<Authorization />} />
                <Route path="/sign-up" element={<Registration />} />
            </Routes>
        </div>
    </div>
  )
}

export default Login