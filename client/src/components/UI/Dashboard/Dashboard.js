import React from 'react'

const Dashboard = (props) => {
  const expenses = props.expenses.map(expense => {
    return <li style={{ color: expense.color }}>Name: {expense.name} Amount: £{expense.amount} Frequency: {expense.frequency}</li>
  })

  return (
    <div>
      <h1>Dashboard</h1>
      <button><a href="/edit">Update Details</a></button>

      <h1>Name: {props.user.firstName} {props.user.lastName}</h1>
      <h1>Username: {props.user.userName}</h1>
      <h1>Email: {props.user.email}</h1>

      <div>
        Charts to Come

        Expenses
        <div>
          <ul>
            {expenses}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard