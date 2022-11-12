import '../styles/profile.scss';
import user from '../images/user.png';
import { Button, Form, Input, Radio, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
const Profile = () =>{
    const [form] = Form.useForm();
    const [register, setRegister] = useState(false);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    useEffect(()=>{
        form.setFieldsValue({
           firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            date: userInfo.date,
           
            
          });
    },[])
    return(
        <div className="profile-container">
            <div className='internal-container'>
            <div className="left-section">
                <div className='top'>
                <img src={user} />
                    <h2>{userInfo.email}</h2>
                </div>
                <div className='bottom'>
                <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} onClick={()=>{localStorage.setItem('loggedIn', false); window.location.replace('/login')}}>Log Out</Button>
                </div>
                   
</div>
<div className="right-section">
<h2>Profile</h2>
<h3>Basics</h3>
<div className='form-container'>
<Form
      layout='vertical'
      form={form}
    >
      <Form.Item label="First Name" name="firstName" >
        <Input placeholder="First Name"  />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Date Of Birth" name="date">
          <DatePicker style={{width:'100%'}} format={'DD/MM/YYYY'} />
        </Form.Item>
        <Form.Item
        label="Current Password"
        name="oldpassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="New Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} onClick={()=>setRegister(true)}>Edit Profile</Button>
      </Form.Item>
    </Form>
</div>

</div>
            </div>
           
        </div>
    )
}

export default Profile;