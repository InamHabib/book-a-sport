
import React, {useState, useEffect} from 'react'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {Button, Checkbox, Radio, Tag, DatePicker, Modal, Tabs, InputNumber, Space, message} from 'antd';
import CreitCardOutlined  from '@ant-design/icons/CreditCardOutlined';
import moment from "moment";
import axios from 'axios';
import FieldTimeOutlined  from '@ant-design/icons/FieldTimeOutlined';
import CalendarOutlined  from '@ant-design/icons/CalendarOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import './book.scss';
import { parseJwt } from '../utils/jwtParse';
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MM-YYY';
const BookTurf = (props) =>{
  const location = useLocation();
  const navigate = useNavigate();
  const [venue, setVenue] = useState();
  const userInfo = parseJwt(localStorage.getItem('userInfo'));
  const token = localStorage.getItem('userInfo')
  const confirmBooking = () =>{
    let url = 'https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/bookSlots';
    console.log(venue)
   let  data = {
    "createdBy":userInfo.email,
    "turfId": venue.id,
    "rate":  venue && venue.price,
    "slotsBooked": slots.length,
    "paymentMode":  paymentType == 3 ? "offline" : "online",
    "amountPaid": 0,
    "transactionId": "tr1234578",
    "slots": slots,
    "bookingDate": selectedDate
    
    }
    axios
      .post(url, data, {
      headers: {
        Authorization: token
      }
    })
    .then((res) => {
        message.success('Booking Successful')
        navigate('/booking-history');
    })
  }
  useEffect(()=>{
    setVenue(location.state.venue); 
  },[])
    const [tabActiveKey, setActiveKey] = useState(1);
    const [slots, setSlots] = useState([]);
    const [selectedDate, setselectedDate] = useState();
    const [timeActiveKey, setTimeActiveKey] = useState(1);
    const [paymentType, setPaymentType] = useState(1);
    const [fullPayment, setFullPayment] = useState();
    const DateSelection = () =>{
        return(
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
          />
        )
    }

    const morningTimes = [
        { label: '09:00 AM', value: 1 },
        { label: '10:00 AM', value: 2 },
        { label: '11:00 AM', value: 3 },
        { label: '12:00 PM', value: 4 },
        { label: '01:00 PM', value: 5 },
        { label: '02:00 PM', value: 6 },
        { label: '03:00 PM', value: 7 },
        { label: '04:00 PM', value: 8 },
        { label: '05:00 PM', value: 9 },
        { label: '06:00 PM', value: 10 },
        { label: '07:00 PM', value: 11 },
        { label: '08:00 PM', value: 12 },
        { label: '09:00 PM', value: 13 },
        { label: '10:00 PM', value: 14 },

      ];
const selectDate = (selectInfo: DateSelectArg) =>{
  console.log('Inam')
  if (!moment().isAfter(moment(selectInfo.start))) {
    let start = moment(selectInfo.start, "DD-MM-YYYY").format("DD-MM-YYYY");

    setselectedDate(start)
    console.log(start);
  } else {
    message.error("Cannot create booking in past");
  }
}

const slotSelection = (checkedValues) =>{
  setSlots(checkedValues);
}
    return(
        venue && <div className='booking-container'>
                <div className='new-left-section'>
<div className='turf-details'>
<div className='left'>
<img src={venue && venue.images && venue.images[0].thumbnailUrl} />
</div>
<div className='right'>
<h1>{venue.turfName}</h1>
<h4>Open Hours: &nbsp;&nbsp;&nbsp;Mon - Sun, {venue.startsAt}:00  to {venue.closesOn}:00 </h4>
<h4>Address: &nbsp;&nbsp;&nbsp;{venue.address}</h4>
</div>
</div>
<div className='booking-tab-container'>
    {console.log(tabActiveKey)}
<Tabs
    defaultActiveKey={tabActiveKey}
    onChange={(e)=>setActiveKey(e)}
    items={[CalendarOutlined  ,  CreitCardOutlined ].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
           {i === 0 ? "Select Date" : "Select Payment Option"}
          </span>
        ),
        key: id,
        children: tabActiveKey == 1 ? <div className='select-date-container'><div className='time-box-container'>

        <Checkbox.Group className='time-box' options={morningTimes} onChange={slotSelection} />
        
                </div><div className='SmallCalendar'> <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={(e)=>selectDate(e)}

      /></div>  <div className='time-picker-container'></div><div className='next-button-container'>
      <Button className='confirm' onClick={()=> setActiveKey(2)}>Next</Button>
      </div> </div> : <div className='payment-container'>
        <h2>
            Instant Booking
        </h2>
        <Radio.Group onChange={(e)=>setPaymentType(e.target.value)} value={paymentType}>
      <Space direction="vertical">
        <Radio value={1}>Pay 100% online</Radio>
        <Radio value={2}>Pay 30% online 70% on venue</Radio>

         
      </Space>
    </Radio.Group>
    <h2>Wait For Approval</h2>
        <Radio checked={paymentType === 3 ? true : false} value={3} onChange={(e)=>{setPaymentType(e.target.value); console.log(e.target.value)}}>Pay 100% on venue</Radio>
        <div className='next-button-container'>
      <Button className='confirm' onClick={()=> confirmBooking()}>Confirm Booking</Button>
      </div>
        </div>,
      };
    })}
  />

  

</div>

        </div>
            </div>
    
    )
}

export default BookTurf;







{/* <TabPane key={0}>
<div className='select-date-container'><div className='SmallCalendar'> <FullCalendar
    plugins={[dayGridPlugin]}
    headerToolbar={{
      left: "prev",
      center: "title",
      right: "next",
    }}
    
    initialView="dayGridMonth"
    editable={true}
    selectable={true}
    selectMirror={true}
    dayMaxEvents={true}

  /></div>  <div className='time-picker-container'></div> </div>
</TabPane>
<TabPane key={1}>
Select Time
</TabPane>
<TabPane key={2}>
Select Payment Option
</TabPane> */}