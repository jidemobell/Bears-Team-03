const Expense = require('../models/Expense');



module.exports = {
     createExpense(body){
       return new Expense(
        { 
          date: `${body.date}`,
          item: `${body.item}`,
          paidWith: `${body.paidWith}`,
          category: [{
            description: `${body.description}`,
            amount: `${body.amount}`
          }]
        }
       ).save()
         .then(response => response)
         .catch(e => {throw e})
     },


     getAllExpenses(req,res){
       Expense.find((err,expenses)=> {
           if(err){
            res.json({
              success: false,
               e
            })
           }else{
            res.json({
              success: true,
              expenses
            })
           }
       })
    },

    getExpenseByDate(req,res){
      Expense.find({
        date:`${req.body.date}`
      }, (err, expense)=>{
        if(err){
          res.json({
            success: false,
             e
          })
         }else{
          res.json({
            success: true,
            expense
          })
         }
      })
    }
}