import turf1 from '../../images/turf1.svg';
import './venueList.scss';
const VenueList = () =>{



 
        let venueArray = [];
        for(let i=0; i<10; i++)
        {
            venueArray.push(<div className="venue-box" onClick={()=>{
                window.location.replace('/venue-detail/1')
            }}>
            <img src={turf1} />
            <h4>
Bats & Kicks
            </h4>
            <h5>
Mankapur, Nagpur
            </h5>
            <h5>
Cricket, Football
            </h5>
            <h5 style={{color:'#378400'}}>
Starting from 900 per hour
            </h5>
        </div>);
        }
    return(
        <div className="venue-list-container">
            <div className="venue-header">

            </div>
            <h4>Explore venues near you</h4>
            <div className="venue-container">

                {venueArray.map((venue,index)=>(
                    venue
                ))}
            </div>
        </div>
    )
}

export default VenueList;