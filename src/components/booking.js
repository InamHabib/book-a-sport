
import venue from '../images/venue.png';
import './book.scss';
import { useState } from 'react';
import {Button, Checkbox, Radio, Tag, DatePicker, TimePicker, Modal } from 'antd';
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MM-YYY';
const Book = (props) =>{

    const [turfSelect, setTurfSelect] = useState(1);
    const [sportType, setSportTpye] = useState([]);
    const [bookingType, setBookingType] = useState(1);
    const turfSelection = (e) => {
       
        let tempSortType = sportType
        if(e.target.value === "cricket")
        {
            if(e.target.checked === true)
            {
              
                tempSortType.push("cricket")
                setSportTpye(tempSortType)
               
            }
            else {
                let filteredArray =  tempSortType.filter(e => e !== 'cricket');
               
                setSportTpye(filteredArray)
            }
        }
        else if(e.target.value === "football")
        {
            if(e.target.checked === true)
            {
              
                tempSortType.push("football")
                setSportTpye(tempSortType)
                
            }
            else {
                let filteredArray =  tempSortType.filter(e => e !== 'football');
               
                setSportTpye(filteredArray)
            }
        }
   

        console.log(`checked = ${e.target.value}`);
      };
    const [paymentMode, setPaymentMode] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePaymentMode = () =>{
        if(paymentMode === 1)
        {
            props.history('/');
        }
        else{
            props.history("https://google.com");
        }
    }
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
    <Checkbox value="cricket" onChange={turfSelection}>Cricket</Checkbox>
<Checkbox value="football" onChange={turfSelection}>Football</Checkbox>
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
<div className='booking-slot-container'>
        <h2>Booking Date & Time</h2>
        <Radio.Group name="radiogroup" defaultValue={1}  onChange={(e)=>setBookingType(e.target.value)}>
    <Radio value={1}>Single Slot Booking</Radio>
    <div className='date-container'>
    <DatePicker format={dateFormat} disabled={bookingType === 2 && true} />
                <TimePicker disabled={bookingType === 2 && true}  />
                </div>
        <Radio value={2} >Bulk Booking</Radio>
        <div className='date-container'>
        <RangePicker format={dateFormat} disabled={bookingType === 1 && true} />
                <TimePicker  />
                </div>
       
  </Radio.Group>

              
        </div>
        </div>
        <div className='right-section'>
            <h2>Booking Summary</h2>
            <div className='booking-form'>
            <div className='object-container'>
            <h4>Sport</h4>
           {sportType.map((sport)=>(
            <h3>{sport}</h3>
           ))}
            </div>
            <div className='object-container'>
            <h4>Turf</h4>
            <h3>{turfSelect === 1 ? "Front Turf" : "Back Turf"}</h3>
            </div>
            <div className='object-container'>
              
            
            </div>
            </div>
           <h2>Amount Summary</h2>
           <div className='amount-summary'>
    
           <h4>Turf Fees:  1200</h4>
           <h4>Taxes: 100</h4>
           <h4 className='total'>Total: 1300</h4>

           </div>
           <Button className='confirm' onClick={()=>setIsModalOpen(true)}>Confirm Booking</Button>
        </div>
        <Modal title="Payment Mode" open={isModalOpen} onOk={handlePaymentMode} onCancel={()=>setIsModalOpen(false)}>
        <Radio.Group name="paymentMode" defaultValue={1}  onChange={(e)=>setPaymentMode(e.target.value)}>
    <Radio value={1}>Pay on venue</Radio>
        <Radio value={2}>Pay Now</Radio>
  </Radio.Group>
      </Modal>
       </div>
    
    )
}

export default Book;







