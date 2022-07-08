import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import './index.css'
import store from './redux/store';
import CreatePassword from './pages/Login/CreatePassword/CreatePassword';
import RecoverPassword from './pages/Login/CreatePassword/RecoverPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login/create-password/:info" element={<CreatePassword/>} />
        <Route path="/reset-password/:info" element={<RecoverPassword/>} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
