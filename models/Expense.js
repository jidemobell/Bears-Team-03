const mongoose = require('mongoose')
//const timestamps = require('mongoose-timestamp');

const ExpenseSchema = new  mongoose.Schema({
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
    description : String,  //etc food,grocery,transport
    amount : String 
     }],
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
},
 {timestamps: { createdAt: 'date' }}
)


//ExpenseSchema.plugin(timestamps);
const Expense = mongoose.model('Expense', ExpenseSchema)


module.exports = {Expense}