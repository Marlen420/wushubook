import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authorization/Authorization.jsx';
import store from './redux/store';
import NotRegisteredHome from './pages/NotRegisteredHome/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<App />} />
          <Route path='/not' element={<NotRegisteredHome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
