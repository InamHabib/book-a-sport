import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined, DashboardOutlined, MessageOutlined, CalendarOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import {React, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate, redirect, useLocation } from "react-router-dom";
import ManageVenue from './owner/manageVenue';
import { parseJwt } from './utils/jwtParse';
import Header from './user/header';
import '../index.scss';
const {  Content, Footer, Sider } = Layout;
const PrimaryLayout = (props) => {
  const location = useLocation();
    let path = location.pathname;
    let currentPage = path.split("/").pop();
    const navigate = useNavigate();
    const [userType, setUserType] = useState();
    let userInfo = localStorage.getItem('userInfo');
    let token = localStorage.getItem('userInfo');
    userInfo = parseJwt(userInfo);
   
    useEffect(()=>{
      let tempUserType;
      if(userInfo && userInfo.email !== "testvenueowner@gmail.com")
      {
        setUserType("USER")
        tempUserType= "USER"
      }
      else{
        setUserType("OWNER")
        tempUserType="OWNER"
      }
      console.log(path)
      if(!token && currentPage !== 'login')
      {
        if( currentPage !== 'signup')
        {
          navigate("/login")
        }
      }
      // if(userInfo && userInfo.roles &&userInfo.roles.length > 0 && userInfo.roles[0] !== "OWNER")


        console.log(tempUserType,"hyhy");
        if((path == "/add-venue" || path == "/manage-booking") && userType=="USER")
        {
          console.log('Inam HAbib')
          
           navigate(`/home`);
        }
      
    },[])
return(
    <Layout >
        {userType == "OWNER" ?     <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      theme="light"
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['4']}

      >
        <MenuItem style={{marginTop:'0', color:"#fff", background:"#000", height:"4rem"}} >
        <UserOutlined  />
        <span >{userInfo.firstName}</span>
        </MenuItem>
       
        <MenuItem >
        <DashboardOutlined  />
        <span >Dashboard</span>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/manage-venues')} >
        <MenuOutlined />
        <span >Manage Venus</span>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/manage-bookings')}>
        <CalendarOutlined  />
        <span >Manage Bookings</span>
        </MenuItem>
        <MenuItem >
        <MessageOutlined   />
        <span >{userInfo.firstName}</span>
        </MenuItem>
       
      </Menu>
    </Sider> : null }

    <Layout>
      {console.log('Inamul', userType)}
        {userType !== "OWNER" ? <Header navigate={navigate} /> : null}
      <Content
      >

<Outlet navigate={navigate} />

      </Content>
    </Layout>
    </Layout>
)


}


 

export default PrimaryLayout;
