import React from 'react'

import Form from '../UI/Form/Form'

const formFields = [
  { label: 'First Name', name: 'firstName', type: 'text' },
  { label: 'Last Name', name: 'lastName', type: 'text' },
  { label: 'User Name', name: 'userName', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password' }
]

const About = (props) => {
  return (
    <div>About Component

      <Form fields={formFields} />
    </div>
  )
}

export default About