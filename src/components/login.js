import '../styles/login.scss';
import logo from '../images/Logo.png';
import axios from 'axios'
import { Button, Form, Input, Radio, DatePicker, Checkbox, message } from 'antd';
import success from '../images/success.png';
import React, { useState } from 'react';
const Login = (props) =>{
    const [form] = Form.useForm();
    const [register, setRegister] = useState(false);
    const [signIn, setSignIn] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const onFinish = (values) => {
      let url = `https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/login`;
      let userInfo ={
        email : values.email,
        password : values.password
      }
      axios
        .post(url, userInfo, {
        headers: {
           "Content-Type": 'application/json' 
        }
      })
      .then((res) => {
          console.log('Inam', res.data);
          let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpZCI6IjJhYjk4MWYwLTUyYTctNGFlYy05NjJlLTg0ZjY4MDk5NGE1NSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjc1MDE0MDgyLCJleHAiOjE2NzUwMTc2ODJ9.IY_uYUj-7u_UHskyJ4TutttWpAqRnewczdWikPFalkk'
          localStorage.setItem('userInfo', res.data.token);      
          window.location.replace('/');
      })
    };
    return(
      <div className='signup-container-width'>
 <div className="signup-container">
            <div className='logo-container'>
                <img src={logo} />
            </div>
          <div className='form-container'>
           <Form
      layout='vertical'
      form={form}
      onFinish={onFinish}
    >
     <Form.Item label="Email" name="email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        // rules={[{ required: true, message: 'Please input your password!' }]}
      >
         <Input.Password />
      </Form.Item>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <span style={{alignItems:'center', display:'flex'}}>Forgot Password ?</span>
      </div>
      <Form.Item style={{marginTop:'3rem'}}>
      <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} htmlType="submit">Sign In</Button>
      </Form.Item>

      <h4 style={{width:'100%', textAlign:'center', justifyContent:'center'}}>OR</h4>

      <Form.Item style={{marginTop:'1rem'}}>
      <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} htmlType="submit">Continue with Google</Button>
      </Form.Item>
     
    </Form>
        </div>
      </div>
      </div>
       
    )
}

export default Login;