import turf1 from '../../images/turf1.png';
import './venueList.scss';
import axios from'axios';
import { useEffect } from 'react';
import { parseJwt } from '../utils/jwtParse';
import { useState } from 'react';
const VenueList = (props) =>{

const [venus, setVenues] = useState([]);
useEffect(()=>{
getVenueList();
console.log("Inam", localStorage.getItem('userInfo'))
},[]);

const userInfo = localStorage.getItem('userInfo') && parseJwt(localStorage.getItem('userInfo'));

const getVenueList = () =>{
    let url = 'https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/getVenues';
    axios
      .get(url, {
    })
    .then((res) => {
        setVenues(res.data);
    })
}
 

    return(
        <div className="venue-list-container">
            <div className="venue-header">
            {console.log(props.history)}
            </div>
            <h4>Explore venues near you</h4>
            <div className="venue-container">

                {venus && venus.length>0 && venus.map((venue,index)=>(
                                <div className="venue-box" onClick={()=>{
                                    window.location.replace(`/venue-detail/?venue=${JSON.stringify(venue)}`)
                                }}>
                                <img src={venue.images[0].thumbnailUrl} width="300px" />
                                <h4>
                   {venue.turfName}
                                </h4>
                                <h5>
                    {venue.address}, 
                                </h5>
                                <h5>
                    {venue.sportsType}
                                </h5>
                                <h5 style={{color:'#378400'}}>
                    Starting from {venue.price} per hour
                                </h5>
                            </div>
                ))}
            </div>
        </div>
    )
}

export default VenueList;