
import {PlusSquareOutlined, ClockCircleOutlined} from '@ant-design/icons';
import './index.scss';
import { useEffect, useState } from "react";
import { parseJwt } from "../utils/jwtParse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import {
    Grid, Row, Col, Input,
  Form,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  TimePicker
} from 'antd';
const AddVenue = (props) =>{
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
const { TextArea } = Input;
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
    const { Search } = Input;
    const [venues, setVenues] = useState([]);
    const [day, setDay] = useState();
    const [time, setTime] = useState();
    const [sportsType, sportSelection] = useState();
    const token = localStorage.getItem('userInfo');
    const userInfo = parseJwt(token);
    const openDays = [
        { label: 'Monday', value: 1 },
        { label: 'Tuesday', value: 2 },
        { label: 'Wednesday', value: 3 },
        { label: 'Thursday', value: 4 },
        { label: 'Friday', value: 5 },
        { label: 'Saturday', value: 6 },
        { label: 'Sunday', value: 7 },
      ];

      const sports = [
        { label: 'Cricket', value: "Cricket" },
        { label: 'Football', value: "Football" },
      ];
      const daySelection = (checkedValues) =>{
        setDay(checkedValues);
      }
      const rangeConfig = {
        rules: [
          {
            type: 'array',
            required: false,
            message: 'Please select time!',
          },
        ],
      };
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
    const handleCreateVenue = (values) => {

            let startsAt = moment(values.workingHours[0]).format("HH");
            let closesOn = moment(values.workingHours[1]).format("HH");
            let url = `https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/addVenue`;
            let data ={
              turfName : values.venueName,
              sportsType : values.sportsType,
              createdBy : userInfo.email,
              address : values.venueAddress,
              location : values.venueCity,
              price : parseInt(values.venuePrice),
              startsAt : parseInt(startsAt),
              closesOn : parseInt(closesOn),
              images : [ {
                "id": "15f81022-9ce6-47cb-bc63-3bb9f346d2e6",
                "originalKey": "15f81022-9ce6-47cb-bc63-3bb9f346d2e6_original_Bats & Kicks.png",
                "thumbnailKey": "15f81022-9ce6-47cb-bc63-3bb9f346d2e6_thumbnail_Bats & Kicks.png",
                "bucket": "bookasportpictures",
                "fileName": "Bats & Kicks.png",
                "originalUrl": "https://bookasportpictures.s3.ap-south-1.amazonaws.com/15f81022-9ce6-47cb-bc63-3bb9f346d2e6_original_Bats%20%26%20Kicks.png",
                "thumbnailUrl": "https://bookasportpictures.s3.ap-south-1.amazonaws.com/15f81022-9ce6-47cb-bc63-3bb9f346d2e6_thumbnail_Bats%20%26%20Kicks.png"
            }]
            }
            axios
              .post(url, data, {
              headers: {
                 "Content-Type": 'application/json',
                 'Authorization': token
              }
            })
            .then((res) => {
                console.log('Inam', res.data);  
                navigate('/manage-venues');
            })
          
        
      };
    return(
<Row className="admin-content-container">
<Col className="admin-content">
    <Row className="admin-header">
        <Col>
        <h1>Add Venue</h1>
        </Col>
        <Col>
        <Search placeholder="Search" size="large" />
        </Col>
      
    </Row>
    <Row className="create-venue">

    <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        form={form}
        onFinish={handleCreateVenue}
      >
       
        <Form.Item label="Venue Name" name="venueName">
          <Input />
        </Form.Item>
        <Form.Item label="Venue Price Per Hour" name="venuePrice">
          <Input />
        </Form.Item>
        <Form.Item label="Sports Type" name="sportsType">
        <div className='day-box-container' style={{paddingBottom:"0"}}>
        <Checkbox.Group className='day-box' value={sportsType} options={sports} onChange={sportSelection} />
        </div>
        
        </Form.Item>
        <Form.Item label="Working Days" name="workingDays">
        <div className='day-box-container' >
        <Checkbox.Group className='day-box' value={day} options={openDays} onChange={daySelection} />
        </div>
        
        </Form.Item>


       <Form.Item name="workingHours" label="Open Close Time"  {...rangeConfig}>
        <TimePicker.RangePicker showTime format="HH:mm" value={time} onChange={setTime} />
      </Form.Item>
    
       
        <div className="add-venue-bottom">
        <Col>
        <Form.Item label="City" name="venueCity">
          <Input />
        </Form.Item>
        <Form.Item label="Address" className="address-container" name="venueAddress">
          <TextArea rows={12} cols={18} className="address"  />
        </Form.Item>
        </Col>
        <Col>
        <Form.Item label="Add Venue Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        </Col>    
        </div>
        <Form.Item className="submit-container">
          <Button type="submit" htmlType="submit">Create Venue</Button>
        </Form.Item>
      </Form>

    </Row>


</Col>

</Row>
    )

}

export default () => <AddVenue />;
