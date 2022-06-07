import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import { setLogin, setRole } from './redux/features/counter/profileSlice.js';


function App() {
  const isLogged = useSelector(state=>state.profile.login.isLogged);
  console.log(isLogged);
  return (
    <div >
      <NavBar />
      <Routes >
        <Route path='/*' element={<Home />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/document' element={<Document />} />
        <Route path='/events' element={<Events />} />
        <Route path='/news' element={<News />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/users' element={<Users />} />

        {isLogged && 
        <Route path='/calendar' element={<Calendar />} />}
      
      </Routes>

    </div>
  );
}

export default App;