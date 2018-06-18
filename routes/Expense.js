const Router = require('express').Router()
const passport = require('passport')
const {createExpense} = require('../controllers/expenses')
const {Expense} = require('../models/Expense')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })

// Add an expense
Router.post('/create', (req, res) => {
const expense = {
     item: req.body.item,
     paidWith: req.body.paidWith,
     frequency: req.body.frequency,
     color: req.body.color,
     //user: req.user._id,
     description: req.body.description,
     amount: req.body.amount

}

   createExpense(expense).then(data => {
     res.status(200).send(data)
   }).catch(e =>{ 
     console.error(e)
     res.status(400).send(e.stack)
    })
})

module.exports = Router