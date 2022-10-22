import Logo from '../images/shield.svg';
import LocationImg from '../images/location_pin.svg';
import HomeImg from '../images/home.svg';
import Search from '../images/search.svg';
import Calendar from '../images/shopping_cart.svg';
import Cart from '../images/calendar_today.svg';
import Account from '../images/account_circle.svg';

const Header = () =>{
    return(
<div className='header'>
      <div className='left'>
      <img src={Logo} />
        <div className='location'>
          <img src={LocationImg} />
          <span>Nagpur, MH</span>
          </div>
      </div>
      <div className='right'>
    <div className='tab-container'>
      <img src={Search} />
      <span>Search</span>
    </div>
    <div className='tab-container'>
      <img src={HomeImg} />
      <span>Home</span>
    </div>
    <div className='tab-container'>
      <img src={Cart} />
      <span>Cart</span>
    </div>
    <div className='tab-container'>
      <img src={Calendar} />
      <span>Bookings</span>
    </div>
   
    <div className='tab-container'>
      <img src={Account} />
      <span>Sign In</span>
    </div>
   
      </div>
      </div>
    )


}

export default Header;