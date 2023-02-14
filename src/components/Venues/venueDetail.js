import venue from '../../images/venue.png';
import './venueDetail.scss';
import {Button} from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';

const VenueDetail = (props) =>{
    const [venue, setVenues] = useState([]);
    useEffect(()=>{
        const search = window.location.search;
        const params = new URLSearchParams(search); 
        setVenues(JSON.parse(params.get('venue'))); 
        console.log(JSON.parse(params.get('venue')));
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
<Button className='book' onClick={()=>window.location.replace(`/new-book/1?venue=${JSON.stringify(venue)}`)}>
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