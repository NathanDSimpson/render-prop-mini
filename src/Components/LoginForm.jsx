import React from 'react'
import Form from './Form'

function LoginForm(){
    return <Form render={(formData) => {
        return (
            <div>
                <h1>Login Form</h1>
                <input type="text" name='email' onChange={formData.handleChange} placeholder='email'/>
                <input type="password" name='password' onChange={formData.handleChange} placeholder='password'/>
                <button onClick={formData.handleSubmit}>Login</button>
            </div>
        )
    }}/>
}

export default LoginForm
