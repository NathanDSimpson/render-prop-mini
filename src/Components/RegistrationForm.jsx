import React from 'react'

import Form from './Form'

export default function RegistrationForm(props) {
  return (
    <Form render={formData => {
      return (
        <div>
          <h1>Registration Form</h1>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={formData.handleChange}/>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={formData.handleChange}/>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={formData.handleChange}/>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm Password"
            onChange={formData.handleChange}/>
          <button onClick={formData.handleSubmit}>submit</button>
        </div>
      )
    }}/>
  )
}