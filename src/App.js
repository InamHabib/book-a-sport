
import 'antd/dist/antd.css';
import Login from './components/login';
import './styles/login.scss';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
const history = useNavigate();
useEffect(()=>{
  if(localStorage.getItem('loggedIn' !== true))
  {
    if( page !== 'signup')
    {
      history("/login")
    }
    else{
      history("/signup")
    }
  }
 
},[])
  return (
   <div className='book-a-sport-container'>
    {page !== 'login' && page !== 'signup' && <Header />}
    
    <div className='page-container'>
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home history={history} />} />
        <Route path="/profile" element={<Profile history={history} />} />
        <Route path="/cricket" element={<VenueList venueType={'cricket'} history={history} /> } />
        <Route path="/football" element={<VenueList venueType={'football'} history={history} />} />
        <Route path="/venue-detail/:id" element={<VenueDetail history={history} />} />
        <Route path="/book/:id" element={<Book history={history} />} />

        <Route path="/" element={<Home history={history} />}>
      </Route>
       
    <Route path="signup" element={<Signup history={history} />} />
    <Route path="login" element={<Login history={history} />} />
  
         
          
      </Routes>
    </BrowserRouter>
    </div>
    
   
   </div>
  );
}

export default App;
