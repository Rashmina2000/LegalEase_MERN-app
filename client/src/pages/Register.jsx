import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link } from 'react-router-dom'

function Register() {
    const onFinish = (values)=>{
        console.log(values);
    }

  return (
    <div className='authentication'>
      <div className='authenticationForm card p-3'>
        <h1 className='card-title'>Glad to see you here</h1>
        <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label='Name' name='name'>
                <Input placeholder='Name'/>
            </Form.Item>
            <Form.Item label='Emaiil' name='email'>
                <Input placeholder='Email'/>
            </Form.Item>
            <Form.Item label='Password' name='password'>
                <Input placeholder='Password' type='password'/>
            </Form.Item>
            <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
            <Link to={'/login'} className='anchor'>CLICK HERE TO LOGIN</Link>
        </Form>
      </div>
    </div>
  )
}

export default Register
