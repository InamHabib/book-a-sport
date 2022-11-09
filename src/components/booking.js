
import venue from '../images/venue.png';
import './book.scss';
import { useState } from 'react';
import {Button, Checkbox, Radio, Tag, DatePicker, TimePicker } from 'antd';
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MM-YYY';
const Book = () =>{

    const [turfSelect, setTurfSelect] = useState(1);
    const [sportType, setSportTpye] = useState(1);
    const turfSelection = (e) => {
        setSportTpye(e.target.checked)
        console.log(`checked = ${e.target.checked}`);
      };
    return(
       <div className='booking-container'>
        <div className='left-section'>
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
<div className='sport-selection'>
    <h2>Select Sport</h2>
    <div className='checkbox-container'>
    <Checkbox onChange={turfSelection}>Cricket</Checkbox>
<Checkbox onChange={turfSelection}>Football</Checkbox>
    </div>

</div>
<div className='turf-type'>
    <h2>Select Turf Type</h2> 
    <Radio.Group name="radiogroup" defaultValue={1}  onChange={(e)=>setTurfSelect(e.target.value)}>
    <Radio value={1}>Front Turf</Radio>
        <div className='tag-container'>
        <Tag color="blue" className='selected-tag'>10m X 20m Turf</Tag>
        <Tag color="blue">Football Goalpost</Tag>
        <Tag color="blue">Cricket Kit</Tag>
        <Tag color="blue">Astro-Turf</Tag>
        </div>
        <Radio value={2}>Back Turf</Radio>
        <div className='tag-container'>
        <Tag color="blue" className='selected-tag'>10m X 20m Turf</Tag>
        <Tag color="blue" className='selected-tag'>Football Goalpost</Tag>
        <Tag color="blue">Cricket Kit</Tag>
        <Tag color="blue">Astro-Turf</Tag>
        </div>
  </Radio.Group>


</div>
        </div>
        <div className='right-section'>
            <h2>Booking Summary</h2>
            <div className='booking-form'>
            <div className='object-container'>
            <h4>Sport</h4>
            <h3>Football</h3>
            </div>
            <div className='object-container'>
            <h4>Turf</h4>
            <h3>{turfSelect === 1 ? "Front Turf" : "Back Turf"}</h3>
            </div>
            <div className='object-container'>
                <h4>Booking Date & Time</h4>
                <div className='date-container'>
                <RangePicker format={dateFormat} />
                <TimePicker  />
                </div>
            
            </div>
            </div>
           <h2>Amount Summary</h2>
           <div className='amount-summary'>
    
           <h4>Turf Fees:  1200</h4>
           <h4>Taxes: 100</h4>
           <h4 className='total'>Total: 1300</h4>

           </div>
           <Button className='confirm' onClick={()=>window.location.replace('/')}>Confirm Booking</Button>
        </div>
       </div>
    
    )
}

export default Book;







