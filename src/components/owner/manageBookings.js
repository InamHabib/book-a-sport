
import React, {useState, useEffect} from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import {Button, Checkbox, Radio, Tag, DatePicker, Modal, Tabs, InputNumber, Space, message, Input, Col, Row} from 'antd';
import CreitCardOutlined  from '@ant-design/icons/CreditCardOutlined';
import moment from "moment";
import axios from 'axios';
import FieldTimeOutlined  from '@ant-design/icons/FieldTimeOutlined';
import CalendarOutlined  from '@ant-design/icons/CalendarOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { parseJwt } from '../utils/jwtParse';
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MM-YYY';

const ManageBooking = (props) =>{
  const location = useLocation();
  const calendarRef = React.createRef();
  const smallCalendarref = React.createRef();
  const [isSmallCalendarOpen, setIsSmallCalendarOpen] = useState(false);
  const { Search } = Input;
  const navigate = useNavigate();

  const userInfo = parseJwt(localStorage.getItem('userInfo'));
  const token = localStorage.getItem('userInfo')


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


    return(
    <Row className="admin-content-container">
    <Col className="admin-content">
        <Row className="admin-header">
            <Col>
            <h1>Manage Booking</h1>
            </Col>
            <Col>
            <Search placeholder="Search" size="large" />
            </Col>
          
        </Row>
        <div className='manage-booking-container'>
        <Row style={{marginBottom:"1rem"}}>
            <Col>
            <span onClick={()=>setIsSmallCalendarOpen(true)}>
            <CalendarOutlined style={{fontSize:"40px"}} size={"48px"} width={"32px"} />
            </span>

            </Col>
        </Row>
<FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        initialView="timeGridWeek"
        // select={(e)=>selectDate(e)}

      /></div>
      </Col>
      <Modal className='small-calendar-container' footer={null} open={isSmallCalendarOpen} onCancel={()=>setIsSmallCalendarOpen(false)}>
      {isSmallCalendarOpen == true && <FullCalendar
        ref={smallCalendarref}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height="500px"
        initialView="dayGridMonth"
        // select={(e)=>selectDate(e)}

      />}
      </Modal>
      </Row>

    
    )
}

export default ManageBooking;







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