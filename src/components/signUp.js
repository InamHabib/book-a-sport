import '../styles/login.scss';
import logo from '../images/Logo.png'
import { Button, Form, Input, Radio, DatePicker, Checkbox } from 'antd';
import success from '../images/success.png';
import React, { useState } from 'react';
const Signup = (props) =>{
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
      let userInfo ={
        firstName : values.firstName,
        lastName : values.lastName,
        email : values.email,
        password : values.password
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('loggedIn', true);
      setRegister(true);
      console.log(localStorage.getItem('userInfo'))
    };
    return(
      <div className='signup-container-width'>
 <div className="signup-container">
            <div className='logo-container'>
                <img src={logo} />
            </div>
  <div className='form-container'>
    {register !== true ?
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
    </Form> : <div className='success-container'><img src={success} style={{width:'100px'}} /> <br /> <h3 style={{justifyContent:'center', textAlign:'center', paddingTop:'3rem'}}>Your account has been <br/> successfully created</h3> <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none', marginTop:'5rem', marginBottom:"2rem"}} onClick={()=>{window.location.replace('/')}}>Explore Venues</Button> </div>}
   
            </div>
 
        </div>
      </div>
       
    )
}

export default Signup;