import './bookingHistory.scss';
import {Button, Row, Tabs, Tab, Table, Space, Tag, message} from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Col from 'antd/es/grid/col';
import { parseJwt } from '../utils/jwtParse';
import { useNavigate } from 'react-router-dom';
const BookinHistory = (props) =>{
  const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState();
    const TabPane = Tabs.TabPane;
    const [venue, setVenues] = useState([]);
    const [upcomingBookings, setUpcomingBookings] = useState();
    const tabOnChange = (key) =>{
        setActiveKey(key)
    }
    let userInfo = localStorage.getItem('userInfo');
    let token = localStorage.getItem('userInfo');
     userInfo = parseJwt(userInfo);
    useEffect(()=>{
        const search = window.location.search;
        const params = new URLSearchParams(search); 
        setVenues(JSON.parse(params.get('venue'))); 
        console.log(userInfo);
        getBookingHistory();
    },[]);
    const getBookingHistory = () =>{
        let url = 'https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/getBookings?status=confirmed'
         axios
           .get(url, {
           headers: {
            'Authorization': `${token}`
           }
         })
         .then((res) => {
            let data = []
            if(res && res.data && res.data.length > 0)
            {
                let resData = res.data
                for(let i =0 ; i< resData.length; i ++)
                {
                    let tempData = {
                      
                            id: resData[i].id,
                            sport: '',
                            date: resData[i].bookingDate,
                            type: 'single',
                            time: '9:00 AM',
                            payment: resData[i].amountPaid
                        
                    }
                    data.push(tempData);
                }
            }

            setUpcomingBookings(data);
         })
         .catch(()=>{
            message.error("Something went wrong")
         })
    }
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Sport',
          dataIndex: 'sport',
          key: 'sport',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Type',
          key: 'type',
          dataIndex: 'type',
          render: (_, { tags }) => (
            <>
              {tags && tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'bulk') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
 
          {
            title: 'Time',
            key: 'time',
            dataIndex: 'time',
          },
          {
            title: 'Payment',
            key: 'payment',
            dataIndex: 'payment',
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Cancel</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
return(
    <div className='booking-history-page'>
<Row>
    <Col>
    <h1>Your Bookings</h1>
    </Col>
</Row>
<Row>
    <Col>
    <Tabs
              defaultActiveKey="1"
              animated={false}
              activeKey={activeKey}
              onChange={tabOnChange}
            >
                     <TabPane
                className='upcoming-tab'
                tab="Upcoming"
                key="1"
              >
            <Table columns={columns} dataSource={upcomingBookings} />

              </TabPane>
              <TabPane
                className='pending-tab'
                tab="Pending Approval"
                key="2"
              >
  <Table columns={columns} dataSource={upcomingBookings} />

              </TabPane>
              <TabPane
                className='past-tab'
                tab="Past"
                key="3"
              >
  <Table columns={columns} dataSource={upcomingBookings} />

              </TabPane>
              <TabPane
                className='cancelled-tab'
                tab="Cancelled"
                key="4"
              >

<Table columns={columns} dataSource={upcomingBookings} />
              </TabPane>
                </Tabs>
    </Col>
</Row>
    </div>

)
}

export default BookinHistory;