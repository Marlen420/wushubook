import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const isLogged = useSelector((state)=>state.counter.login.isLogged);
    useEffect(()=>{
        if (isLogged) navigate('/');
    }, [navigate])
    return (
        <div>Login</div>
    )
}
export default Login