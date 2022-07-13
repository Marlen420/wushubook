import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Calendar from './pages/Calendar/Calendar.jsx'
import Clubs from './pages/Clubs/index.jsx'
import Document from './pages/Documents/Documents.jsx'
import Events from './pages/Even/Events.jsx'
import MainNews from './pages/News/MainNews/MainNews.jsx'
import Statistics from './pages/Statistics/index.jsx'
import Users from './pages/Users/Users.jsx'
import NavBar from './components/NavBar/index.jsx'
import Header from './components/Headers/index.jsx';
import { getLastEvent, getNewEvent, getNews } from './api/main.js';
import Profile from './pages/Profile/Profile.jsx';


import * as MoreNews from './pages/News/index.js';
import Chat from './pages/Chat/index.jsx';
import { getStatistics } from './api/statistics.js';
import Chart from './pages/chart.js';
import NotRegisteredHome from './pages/NotRegisteredHome/index.jsx';


function App() {
  const { isLogged } = useSelector(state=>state.profile.login);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNewEvent())
    dispatch(getLastEvent())
    dispatch(getNews())
    dispatch(getStatistics())
  }, [dispatch])

  return (
    <div >
      {isLogged
      ? <>
      <Header />
      <NavBar />
      <Routes >
        <Route path='/*' element={<Home />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/document' element={<Document />} />
        <Route path='/events' element={<Events />} />
        <Route path='/news' element={<MainNews />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/users' element={<Users />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/moreNews' element={<MoreNews />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chart' element={<Chart />} />
        
        {isLogged &&
        <Route path='/calendar' element={<Calendar />} />}
      
      </Routes>
      </>
      : <NotRegisteredHome />}

    </div>
  );
}

export default App;