const {Expense} = require('../models/Expense');



module.exports = {
     createExpense(body){
       return new Expense(
        {
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
     }
}