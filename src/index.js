import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import './index.css'
import store from './redux/store';
import CreatePassword from './pages/Login/CreatePassword/CreatePassword';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/login/create-password" element={<CreatePassword action="create" />} />
        <Route path="/login/reset-password" element={<CreatePassword  action="reset" />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
