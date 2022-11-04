const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    CustomerID: { type: String },
    Status: { type: String },
    Date: { type: Date },

})

const Order = mongoose.model('ordertest', orderSchema)

module.exports = Order;



