const mongoose = require('mongoose')
var DateOnly = require('mongoose-dateonly')(mongoose);

const ExpenseSchema = new  mongoose.Schema({
  date: {
    type: DateOnly
  },
  name: {
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
    type: String
  }, 
  color: String,
  category : [{
    description : String,  //etc food,grocery,transport
    amount : String 
     }],
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
},
 {timestamps: { createdAt: 'date' }}
)


const Expense = mongoose.model('Expense', ExpenseSchema)


module.exports = Expense

