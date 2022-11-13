import venue from '../../images/venue.png';
import './venueDetail.scss';
import {Button} from 'antd';
const VenueDetail = (props) =>{
return(
    <div className='venue-page'>
<div className="venue-detail-container">
    <h4 className="path">
    Home / India / Nagpur / Shalom Sports Academy
    </h4>
    <div className="venue-box">
        <img src={venue} />
        <div className="venue-info">
            <div className="left-section">
<div className="top">
<h4>
Shalom Sports Academy
</h4>
<h5>
    Mankapur, Nagpur &nbsp;&nbsp; | 10km from your location
</h5>
<h5>
    Cricket, Football
</h5>
</div>
<div className="bottom">
<Button className='book' onClick={()=>props.history('/book/1')}>
    Book
</Button>
<Button className='Bulk'>
    Bulk Booking 
</Button>
<Button className='check'>
    Check Availability
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