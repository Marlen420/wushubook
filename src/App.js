import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Calendar from './pages/Calendar/Calendar.jsx'
import Clubs from './pages/Clubs/Clubs.jsx'
import Document from './pages/Documents/Documents.jsx'
import Events from './pages/Even/Events.jsx'
import News from './pages/News/News.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import Users from './pages/Users/Users.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Header from './components/Headers/Headers.jsx';
import { getLastEvent, getNewEvent, getNews } from './api/main.js';


function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getNewEvent())
    dispatch(getLastEvent())
    dispatch(getNews())
  }, [dispatch])

  return (
    <div >
      <Header />
      <NavBar />
      <Routes >
        <Route path='/*' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/document' element={<Document />} />
        <Route path='/events' element={<Events />} />
        <Route path='/news' element={<News />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/users' element={<Users />} />


      </Routes>

    </div>
  );
}

export default App;