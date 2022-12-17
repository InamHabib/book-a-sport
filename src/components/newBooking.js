
import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {Button, Checkbox, Radio, Tag, DatePicker, Modal, Tabs, InputNumber, Space} from 'antd';
import CreitCardOutlined  from '@ant-design/icons/CreditCardOutlined';
import FieldTimeOutlined  from '@ant-design/icons/FieldTimeOutlined';
import CalendarOutlined  from '@ant-design/icons/CalendarOutlined';
import venue from '../images/venue.png';
import './book.scss';
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MM-YYY';
const BookTurf = (props) =>{
    const [tabActiveKey, setActiveKey] = useState(1);
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
        { label: '09:00 AM', value: '9' },
        { label: '09.30 AM', value: '9.30' },
        { label: '10:00 AM', value: '10' },
        { label: '10:30 AM', value: '10.30' },
        { label: '11:00 AM', value: '11' },
        { label: '11:30 AM', value: '11.30' },
      ];

    return(
        <div className='booking-container'>
                <div className='new-left-section'>
<div className='turf-details'>
<div className='left'>
<img src={venue} />
</div>
<div className='right'>
<h1>Shalom Sports Academy </h1>
<h4>Open Hours: &nbsp;&nbsp;&nbsp;Mon - Sun, 6:00 AM to 10:00 AM</h4>
<h4>Address: &nbsp;&nbsp;&nbsp;Mecosabagh Methodist High Ground, Nagpur</h4>
</div>
</div>
<div className='booking-tab-container'>
    {console.log(tabActiveKey)}
<Tabs
    defaultActiveKey={tabActiveKey}
    onChange={(e)=>setActiveKey(e)}
    items={[CalendarOutlined , FieldTimeOutlined ,  CreitCardOutlined ].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
           {i === 0 ? "Select Date" : i === 1 ? "Select Time" : "Select Payment Option"}
          </span>
        ),
        key: id,
        children: tabActiveKey == 1 ? <div className='select-date-container'><div className='SmallCalendar'> <FullCalendar
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

      /></div>  <div className='time-picker-container'></div> </div>: tabActiveKey == 2 ? <div className='time-select'>
        <h2>Instant Booking</h2>
        <Tabs
    defaultActiveKey={timeActiveKey}
    onChange={(e)=>setTimeActiveKey(e)}
    items={[CalendarOutlined , FieldTimeOutlined ,  CreitCardOutlined ].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
           {i === 0 ? "Morning" : i === 1 ? "Afternoon" : "Evening"}
          </span>
        ),
        key: id,
        children: timeActiveKey == 1 ? <div className='time-box-container'>

<Checkbox.Group className='time-box' options={morningTimes} />

        </div>: timeActiveKey == 2 ? <div className='time-box-container'><Checkbox.Group className='time-box' options={morningTimes} /></div> :<div className='time-box-container'><Checkbox.Group className='time-box' options={morningTimes} /></div>,
      };
    })}
  />

  <h2>Select a duration</h2>

  <div className='duration-container'>
    <div className='hour-container'>
    <InputNumber
      addonAfter="Hr"
      defaultValue={1}
    />
        </div>
  <div className='minute-container'>
  <InputNumber
      addonAfter="Min"
      defaultValue={0}
      step={30}
    />
     
    </div>
  
    </div>
      </div> : <div className='payment-container'>
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
        </div>,
      };
    })}
  />

  <div className='next-button-container'>
  <Button className='confirm' onClick={()=> tabActiveKey === 1 ? setActiveKey(2)  : tabActiveKey === 2 ? setActiveKey(3) : window.location.replace('/')}>{tabActiveKey !== 3 ? "Next" : "Confirm Booking"}</Button>
  </div>

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