import { Grid, Row, Col, Input } from "antd"
import {PlusSquareOutlined, ClockCircleOutlined} from '@ant-design/icons';
import './index.scss';
import { useEffect, useState } from "react";
import { parseJwt } from "../utils/jwtParse";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageVenue = () =>{
    const navigate = useNavigate();
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
    const { Search } = Input;
    const [venues, setVenues] = useState([]);
    const token = localStorage.getItem('userInfo');
    const userInfo = parseJwt(token);
    useEffect(()=>{
getVenueList();
    },[])
    const getVenueList = () =>{
        let url = `https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/getVenues?createdBy=${userInfo.email}`;
        axios
          .get(url, {
        })
        .then((res) => {
            setVenues(res.data);
        })
    }
    return(
<Row className="admin-content-container">
<Col className="admin-content">
    <Row className="admin-header">
        <Col>
        <h1>My Venues</h1>
        </Col>
        <Col>
        <Search placeholder="Search" size="large" />
        </Col>
      
    </Row>

    <Row className="admin-body" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} onClick={()=>navigate('/add-venue')}>
        <Col className="gutter-row venues add-venue" span={24}>
        <h2>Add Venue</h2>
        <PlusSquareOutlined />
      </Col>
        </Col>

      {venues && venues.length > 0 && venues.map((venue)=>(
        <Col className="gutter-row" span={6}>
            <Col className="venues">
            <img src={venue.images && venue.images.length >0 && venue.images[0].thumbnailUrl} />
        <h4>{venue.turfName}</h4>
      
        <Row>
            <Col><span>{venue.address}</span></Col>
            <Col><span> &nbsp; &nbsp; &nbsp; <ClockCircleOutlined /> &nbsp;{venue.startsAt}:00  to {venue.closesOn}:00 </span></Col>
        </Row>
        <h5>{venue.sportsType}</h5>
            </Col>
       
      </Col>
      ))}
      
  
    </Row>
</Col>

</Row>
    )

}

export default ManageVenue