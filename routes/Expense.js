const Router = require('express').Router()
const passport = require('passport')
const {createExpense,
  getAllExpenses,
  getExpenseByDate} = require('../controllers/expenses')
const Expense = require('../models/Expense')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })
const  _ = require('lodash')

//Add an expense
Router.post('/create', requireAuth, (req, res) => {
const expense = {
     date: req.body.date,
     item: req.body.item,
     paidWith: req.body.paidWith,
     frequency: req.body.frequency,
     color: req.body.color,
     description: req.body.description,
     amount: req.body.amount,
     user: req.user._id

}
   
   createExpense(expense).then(data => {
     res.status(200).json({
       success: true,
       data
     })
   }).catch(e =>{ 
     console.error(e)
     res.status(400).json({
      success: false,
      e: e.stack
    })
    })
})



//get all user expenses by date
Router.post('/list/date', getExpenseByDate)

//get all user expenses
Router.get('/list', getAllExpenses)

module.exports = Router