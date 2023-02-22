
import './venueDetail.scss';
import {Button} from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const VenueDetail = (props) =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [venue, setVenues] = useState([]);
    useEffect(()=>{

        setVenues(location.state.venue); 
        console.log(location.state.venue);

    },[])
return(
    <div className='venue-page'>
<div className="venue-detail-container">


    <div className="venue-box">
    <img src={venue && venue.images && venue.images[0].thumbnailUrl} />
    <div className="venue-info">
        <div className="left-section">
<div className="top">
<h4>
{venue.turfName}
</h4>
<h4>Open Hours: &nbsp;&nbsp;&nbsp;Mon - Sun, {venue.startsAt}:00  to {venue.closesOn}:00 </h4>
<h5>
{venue.address} | {venue.location}
</h5>
<h5>
{venue.sportsType}
</h5>
<h5 style={{color:'green'}}>
{venue.price} per hour
</h5>
</div>
<div className="bottom">
<Button className='book' onClick={()=>navigate(`/booking`, {state:{venue}})}>
Book
</Button>

</div>
        </div>
        <div className="right-section">
            <div className="top">

            </div>
            <div className="bottom">

            </div>
        </div>
    </div>
</div>


</div>
    </div>

)
}

export default VenueDetail;