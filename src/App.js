
import 'antd/dist/antd.css';
import Login from './components/login';

import './styles/login.scss';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route, HashRouter  } from "react-router-dom";
import Header from './components/header';
import VenueList from './components/Venues/venueList';
import VenueDetail from './components/Venues/venueDetail';
import Book from './components/booking';

function App() {
  let path = window.location.pathname;
let page = path.split("/").pop();
  return (
   <div className='book-a-sport-container'>
    {page !== 'login' && <Header />}
    
    <div className='page-container'>
    <HashRouter >
      <Routes>

          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cricket" element={<VenueList venueType={'cricket'} /> } />
          <Route path="/football" element={<VenueList venueType={'football'} />} />
          <Route path="/venue-detail/:id" element={<VenueDetail />} />
          <Route path="/book/:id" element={<Book />} />

          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </HashRouter >
    </div>
    
   
   </div>
  );
}

export default App;