
import 'antd/dist/antd.css';
import Login from './components/login';

import './styles/login.scss';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import VenueList from './components/Venues/venueList';
import VenueDetail from './components/Venues/venueDetail';

function App() {
  let path = window.location.pathname;
let page = path.split("/").pop();
  return (
   <div className='book-a-sport-container'>
    {page !== 'login' && <Header />}
    
    <div className='page-container'>
    <BrowserRouter>
      <Routes>

          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cricket" element={<VenueList venueType={'cricket'} /> } />
          <Route path="/football" element={<VenueList venueType={'football'} />} />
          <Route path="/venue-detail/:id" element={<VenueDetail />} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
   
   </div>
  );
}

export default App;
