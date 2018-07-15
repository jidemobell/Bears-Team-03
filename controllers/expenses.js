const Expense = require('../models/Expense');



module.exports = {
     createExpense(body){
       return new Expense(
        { 
        //  date: `${body.date}`,
          name: `${body.name}`,
          paidWith: `${body.paidWith}`,
        //  color: `${body.color}`,
         // frequency: `${body.frequency}`,
          // category: [{
          //   description: `${body.description}`,
          //   amount: `${body.amount}`
          // }],
          amount: `${body.amount}`,
          category: `${body.category}`,
          user:`${body.user}`
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