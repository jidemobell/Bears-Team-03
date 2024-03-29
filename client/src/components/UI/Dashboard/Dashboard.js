import React from 'react'
import PieChart from '../Charts/PieChart';

const Dashboard = (props) => {
  const colors = []

  const expenses = props.expenses.map(expense => {
    colors.push(expense.color)
    return null
  })

  return (
    <div>
      <h1>Dashboard</h1>
      <button><a href="/edit">Update Details</a></button>
      <button onClick={props.onClick}>Add Expense</button>

      <h1>Name: {props.user.firstName} {props.user.lastName}</h1>
      <h1>Username: {props.user.userName}</h1>
      <h1>Email: {props.user.email}</h1>

      <div>
        Charts

        
        <div>
          Expenditure
          <PieChart data={props.expenses} colors={colors} />
        </div>

        <div>
          Income
          <PieChart data={props.incomes} colors={colors} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard