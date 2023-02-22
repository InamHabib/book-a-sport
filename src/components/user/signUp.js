import './login.scss';
import logo from '../../images/Logo.png'
import { Button, Form, Input, Radio, DatePicker, Checkbox, message } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = (props) =>{
  const navigate = useNavigate();
    const [form] = Form.useForm();
    const { getFieldDecorator } = form;
    const [register, setRegister] = useState(false);
    const [signIn, setSignIn] = useState(false);
  
//     const registerUser = () =>{
// console.log('clicked');
//       form.validateFields((err, values) => {
//         console.log('form')
//         if (err) {
//           console.log(err);
//           return;
//         }
  
//         console.log("Received values of form: ", values);
//         // formRef.resetFields();
//         // setVisible(false);
//       });
//     }
    const onFinish = (values) => {
      console.log('Success:', values);
      let url = `https://9nx6dm8wv5.execute-api.ap-south-1.amazonaws.com/dev/register`;
      let userInfo ={
        email : values.email,
        password : values.password,
        firstName : values.firstName,
        lastName : values.lastName,
        dateOfBirth : "17/10/1993"
      }
      axios
        .post(url, userInfo, {
        headers: {
           "Content-Type": 'application/json' 
        }
      })
      .then((res) => {
          console.log('Inam', res.data);
          if(res.data.status == "SUCCESS")
          {
            let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpZCI6IjJhYjk4MWYwLTUyYTctNGFlYy05NjJlLTg0ZjY4MDk5NGE1NSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjc1MDE0MDgyLCJleHAiOjE2NzUwMTc2ODJ9.IY_uYUj-7u_UHskyJ4TutttWpAqRnewczdWikPFalkk';
            localStorage.setItem('userInfo',res.data.token);
            navigate("/home")

          }
          else
          {
            message.error("Signup Failed")
          }
      
          // navigate('/');
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
      <Form.Item label="First Name" name="firstName">
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true }]}>
    <Input placeholder="Email"  />
       
      </Form.Item>
      <Form.Item label="Date Of Birth" name="date">
          <DatePicker style={{width:'100%'}} format={'DD/MM/YYYY'}  />
        </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} htmlType="submit"       >Create Account</Button>
      </Form.Item>
    </Form>
   
            </div>
 
        </div>
      </div>
       
    )
}

export default Signup;