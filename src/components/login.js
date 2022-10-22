import '../styles/login.scss';
import logo from '../images/Logo.png'
import { Button, Form, Input, Radio, DatePicker, Checkbox } from 'antd';
import success from '../images/success.png';
import React, { useState } from 'react';
const Login = () =>{
    const [form] = Form.useForm();
    const [register, setRegister] = useState(false);
    const [signIn, setSignIn] = useState(false)

    return(
      <div className='signup-container-width'>
 <div className="signup-container">
            <div className='logo-container'>
                <img src={logo} />
            </div>
       {!signIn &&     <div className='form-container'>
          { !register ?   <Form
      layout='vertical'
      form={form}
    >
      <Form.Item label="First Name">
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Date Of Birth">
          <DatePicker style={{width:'100%'}} format={'DD/MM/YYYY'} />
        </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} onClick={()=>setRegister(true)}>Create Account</Button>
      </Form.Item>
    </Form> : <div className='success-container'><img src={success} style={{width:'100px'}} /> <br /> <h3 style={{justifyContent:'center', textAlign:'center', paddingTop:'3rem'}}>Your account has been <br/> successfully created</h3> <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none', marginTop:'5rem'}} onClick={()=>{window.location.replace('/')}}>Explore Venues</Button> </div>}
   
            </div>}
            {signIn &&     <div className='form-container'>
          { !register ?   <Form
      layout='vertical'
      form={form}
    >
   <Form.Item label="User Name">
        <Input placeholder="User Name" />
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
      <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} onClick={()=>setRegister(true)}>Sign In</Button>
      </Form.Item>

      <h4 style={{width:'100%', textAlign:'center', justifyContent:'center'}}>OR</h4>

      <Form.Item style={{marginTop:'1rem'}}>
      <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none'}} onClick={()=>setRegister(true)}>Continue with Google</Button>
      </Form.Item>
     
    </Form> : <div className='success-container'><img src={success} style={{width:'100px'}} /> <br /> <h3 style={{justifyContent:'center', textAlign:'center', paddingTop:'3rem'}}>Your account has been <br/> successfully created</h3> <Button type="primary" style={{background:'#70B527', width:'100%', borderRadius:'5px', border:'none', marginTop:'5rem'}} onClick={()=>window.location.replace('/')}>Explore Venues</Button> </div>}
   
            </div>}
        </div>
      </div>
       
    )
}

export default Login;