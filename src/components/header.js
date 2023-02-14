import Logo from '../images/shield.svg';
import LocationImg from '../images/location_pin.svg';
import HomeImg from '../images/home.svg';
import Search from '../images/search.svg';
import Calendar from '../images/shopping_cart.svg';
import Cart from '../images/calendar_today.svg';
import Account from '../images/account_circle.svg';

const Header = (props) =>{
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
    <div className='tab-container' onClick={()=>window.location.replace('/')}>
      <img src={HomeImg} />
      <span>Home</span>
    </div>
    <div className='tab-container'>
      <img src={Calendar} />
      <span onClick={()=>window.location.replace('/booking-history')}>Bookings</span>
    </div>
   
    <div className='tab-container'>

      <img src={Account} onClick={()=>window.location.replace('/profile')} />
      
      {/* <span>{userInfo && userInfo.firstName}</span> */}
    </div>
   
      </div>
      </div>
    )


}

export default Header;