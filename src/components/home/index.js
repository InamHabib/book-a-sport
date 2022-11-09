import React from 'react';
import { Carousel } from 'antd';
import banner1 from '../../images/banner.png';
import banner2 from '../../images/banner2.png'
import "./index.scss";
import 'antd/dist/antd.css';
import barBanner from '../../images/barBanner.png';
import cricket from '../../images/cricket.svg';
import football from '../../images/football.svg';

// const  = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };
const Home = () =>{
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
      const contentStyle = {
        height: '300px',
        width:'-webkit-fill-available'
      };
    return(
        <div className='home-container'>
            <div className='slider-container'>
            <Carousel autoplay >
      <div>
        <img  style={contentStyle} src={banner1} />
      </div>
      <div>
      <img style={contentStyle} src={banner2} />
      </div>
    </Carousel>
            </div>
            {/* <img style={{height:'-webkit-fill-available', height:'40px', marginTop:'2rem', marginLeft:'2rem', marginRight:'2rem'}} src={barBanner} /> */}
            <h4 style={{fontSize:'2em', fontWeight:'bold'}}>Book a venue for</h4>
            <div className='category-container'>

                <div className='category-box'>
                    <img src={cricket} onClick={()=>window.location.replace('/book-a-sport/#/cricket')} />
                </div>
                <div className='category-box'>
                    <img src={football} onClick={()=>window.location.replace('/football')} />
                </div>
            </div>
        </div>
    )
}

export default Home;