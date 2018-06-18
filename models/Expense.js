const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
  // name: String,
  // amount: Number,
  // frequency: String,
  // color: String,
  timestamps: {            
    createdAt: 'date',
    updatedAt: 'last_edited'
   },
  item: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  paidWith: {          //paid with cash or card
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  frequecy: {

  }, 
  color: String,
  category : [{
    decription : String,  //etc food,grocery,transport
    amount : String 
     }],
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
})


ExpenseSchema.statics.findByUser = function(){

}

const Expense = module.exports = mongoose.model('Expense', ExpenseSchema)

module.exports.createExpense = (expense, callback) => {
  expense.save(callback)
}