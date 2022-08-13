import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Calendar from './pages/Calendar/Calendar.jsx'
import Clubs from './pages/Clubs/index.jsx'
import Document from './pages/Documents/Documents.jsx'
import Events from './pages/Event/Events.jsx'
import Statistics from './pages/Statistics/index.jsx'
import Users from './pages/Users/Users.jsx'
import { NavBar } from './components';
import { getLastEvent, getNewEvent } from './api/main.js'

import Profile from './pages/Profile/Profile.jsx';
import Headers from './components/Headers/Headers.jsx'
import { MainNews, MoreNews } from './pages/News/index.js';
import Chat from './pages/Chat/index.jsx';
import { getClubsStatistics, getStatistics } from './api/statistics.js';
import NotRegisteredHome from './pages/NotRegisteredHome/index.jsx';
import { getDialogs } from './api/chat.js';
import { getNews } from './api/news.js';
import { io } from 'socket.io-client'
import { setLocationUrl } from './redux/reducers/chatSlice.js';
import { getEventCalendar } from './api/calendar.js';


function App() {
  const dispatch = useDispatch()
  const [socket, setSocket] = useState(null)

  const { isLogged } = useSelector(state => state.profile.login);
  const { user } = useSelector(state => state.profile)



  useEffect(() => {
    dispatch(getNewEvent())
    dispatch(getLastEvent())
    dispatch(getNews())
    dispatch(getStatistics())
    dispatch(getDialogs())
    dispatch(getEventCalendar())
    dispatch(getClubsStatistics())



    // setSocket(io('....')) 


  }, [dispatch])



  return (
    <div>
      {isLogged
        ? <>
          <Headers socket={socket} />
          <NavBar />
          <Routes>
            <Route path='/*' element={<Home userStatus={user.status} />} />
            {
              user.status !== '0' &&
              <>
                <Route path='/clubs' element={<Clubs />} />
                <Route path='/document' element={<Document />} />
                <Route path='/events' element={<Events />} />
                <Route path='/news' element={<MainNews />} />
                <Route path='/statistics' element={<Statistics />} />
                {
                  user.role === 'admin' &&
                  <Route path='/users' element={<Users />} />
                }
                <Route path='/profile' element={<Profile />} />
                <Route path='/moreNews' element={<MoreNews />} />
                <Route path='/chat' element={<Chat />} />
              </>
            }
            {
              isLogged &&
              <Route path='/calendar' element={<Calendar />} />
            }

          </Routes>
        </>
        : <NotRegisteredHome />}

    </div>
  );
}

export default App;
