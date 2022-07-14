import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Calendar from './pages/Calendar/Calendar.jsx'
import Clubs from './pages/Clubs/index.jsx'
import Document from './pages/Documents/Documents.jsx'
import Events from './pages/Event/Events.jsx'
import Statistics from './pages/Statistics/index.jsx'
import Users from './pages/Users/Users.jsx'
import { NavBar, Header } from './components';
import { getLastEvent, getNewEvent, getNews } from './api/main.js';
import Profile from './pages/Profile/Profile.jsx';


import { MainNews, MoreNews, OtherNews } from './pages/News/index.js';
import Chat from './pages/Chat/index.jsx';
import { getStatistics } from './api/statistics.js';
import NotRegisteredHome from './pages/NotRegisteredHome/index.jsx';


function App() {
  const { isLogged } = useSelector(state => state.profile.login);
  const dispatch = useDispatch()

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

            {isLogged &&
              <Route path='/calendar' element={<Calendar />} />}

          </Routes>
        </>
        : <NotRegisteredHome />}

    </div>
  );
}

export default App;
