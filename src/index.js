import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Login from './pages/Login/Login';
import './index.css'
=======
import Login from './pages/Authorization/Authorization.jsx';
>>>>>>> dev2
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
>>>>>>> dev2
    </Provider>
  </React.StrictMode>
);
