import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { AuthProvider } from './auth';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import Watchlist from './pages/Watchlist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
  <Routes>
<Route index element={<Home/>}/>
<Route path='sign-In' element={<SignIn/>}/>
<Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
<Route path='watchlist' element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>
  </AuthProvider>
);

