const Router = require('express').Router()
//const passport = require('passport')
const passport = require('../Services/Passport')
const {createExpense,
  getAllExpenses,
  getExpenseByDate} = require('../controllers/expenses')
const Expense = require('../models/Expense')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt-local', { session: false })
const  _ = require('lodash')

//Add an expense
Router.post('/create',requireAuth, (req, res) => {
console.log('CREATING EXPENSE')
const expense = {
    // date: req.body.date,
     name: req.body.name,
     paidWith: req.body.paidWith,
     //frequency: req.body.frequency,
    // color: req.body.color,
    // description: req.body.description,
     amount: req.body.amount,
     amcategory: req.body.category,
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

Router.get('/list',requireAuth, (req,res) => {
  getAllExpenses()
})




module.exports = Router