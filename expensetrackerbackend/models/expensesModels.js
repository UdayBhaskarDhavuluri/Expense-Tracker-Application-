const mongoose = require('mongoose')


const expenseTrackerTemplate  = new mongoose.Schema({

    productname :{
        type :String,
        required : true
    },
    productprice :{
        type: Number,
        required  :true
    },

    date : {
        type :Date,
       
    }


})
module.exports = mongoose.model('expensetrackertable', expenseTrackerTemplate )