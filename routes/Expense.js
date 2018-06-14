const Router = require('express').Router()
const passport = require('passport')

const Expense = require('../models/Expense')

const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })

// Add an expense
Router.post('/create', requireAuth, (req, res, next) => {
let expense = new Expense({
  name: req.body.name,
  amount: req.body.amount,
  frequency: req.body.frequency,
  color: req.body.color,
  user: req.user._id
})

Expense.createExpense(expense, (err, expense) => {
  if(err) { return next(err)}
  res.json({ success: true, expense })
})
})

module.exports = Router