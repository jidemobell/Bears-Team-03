import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button><a href="/edit">Edit Details</a></button>

      <h1>Name: {props.user.firstName} {props.user.lastName}</h1>
      <h1>Username: {props.user.userName}</h1>
      <h1>Email: {props.user.email}</h1>

      <div>
        Charts to Come
      </div>
    </div>
  )
}

export default Dashboard