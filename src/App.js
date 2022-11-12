
import 'antd/dist/antd.css';
import Login from './components/login';

import './styles/login.scss';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import VenueList from './components/Venues/venueList';
import VenueDetail from './components/Venues/venueDetail';
import Book from './components/booking';
import Signup from './components/signUp';
import Profile from './components/profile';
import { useEffect } from 'react';

function App() {
  let path = window.location.pathname;
let page = path.split("/").pop();
useEffect(()=>{
  if(localStorage.getItem('loggedIn' !== true) && page !== 'register')
  {
    window.location.replace("/login")
  }
})
  return (
   <div className='book-a-sport-container'>
    {page !== 'login' && page !== 'signup' && <Header />}
    
    <div className='page-container'>
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cricket" element={<VenueList venueType={'cricket'} /> } />
        <Route path="/football" element={<VenueList venueType={'football'} />} />
        <Route path="/venue-detail/:id" element={<VenueDetail />} />
        <Route path="/book/:id" element={<Book />} />

        <Route path="/" element={<Home />}>
      </Route>
       
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
  
         
          
      </Routes>
    </BrowserRouter>
    </div>
    
   
   </div>
  );
}

export default App;
