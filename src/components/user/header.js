import Logo from '../../images/shield.svg';
import LocationImg from '../../images/location_pin.svg';
import HomeImg from '../../images/home.svg';
import Search from '../../images/search.svg';
import Calendar from '../../images/shopping_cart.svg';
import Account from '../../images/account_circle.svg';
import { useNavigate } from 'react-router-dom';
const Header = (props) =>{
  const navigate = useNavigate();
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    return(
<div className='header'>
      <div className='left'>
      <img src={Logo} />
        <div className='location'>
          <img src={LocationImg} />
          <span>{localStorage.getItem('city')}</span>
          </div>
      </div>
      <div className='right'>
    <div className='tab-container'>
      <img src={Search} />
      <span>Search</span>
    </div>
    <div className='tab-container' onClick={()=>navigate('/')}>
      <img src={HomeImg} />
      <span>Home</span>
    </div>
    <div className='tab-container'>
      <img src={Calendar} />
      <span onClick={()=>navigate('/booking-history')}>Bookings</span>
    </div>
   
    <div className='tab-container'>

      <img src={Account} onClick={()=>navigate('/profile')} />
      
      {/* <span>{userInfo && userInfo.firstName}</span> */}
    </div>
   
      </div>
      </div>
    )


}

export default Header;