const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
  name: String,
  amount: Number,
  frequency: String,
  color: String,
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
})

const Expense = module.exports = mongoose.model('Expense', ExpenseSchema)

module.exports.createExpense = (expense, callback) => {
  expense.save(callback)
}