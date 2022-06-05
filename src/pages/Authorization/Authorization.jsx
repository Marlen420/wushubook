import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.counter.login.isLogged);
    useEffect(() => {
        if (isLogged) navigate('/');
    }, [navigate])
    return (
        <div>Authorization</div>
    )
}
export default Authorization