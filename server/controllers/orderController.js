const Order = require('../models/Order')
const mongoose = require('mongoose')

//Get all orders
const getAllOrders = async (req, res) => {
    const orders = await Order.find({}).sort({ createdAt: -1 })

    res.status(200).json(orders)
}

//get all orders of the customer

const getAllCustomerOrders = async (req, res) => {
    const order = await Order.find({ customerId: req.params.customerId });
    res.status(200).json(order)
}

//Get order by order ID

const getOrderByOrderId = async (req, res) => {
    const order = await Order.find({ orderId: req.params.orderId });
    res.status(200).json(order)

}



//Get a single order
const getSingleOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const singleOrder = await Order.findById(id)
    if (!singleOrder) {
        return res.status(404).json({ error: 'No such order' })
    }

    res.status(200).json(singleOrder)
}



//Create new order
const createOrder = async (req, res) => {
    const { customerName, customerId, orderId, customerEmail, productId, quantity, image, price, adrress, paymentMethod, isDelivered, deliveredAt } = req.body

    //adding to the db
    try {
        const order = await Order.create({ customerName, customerId, orderId, customerEmail, productId, quantity, image, price, adrress, paymentMethod, isDelivered, deliveredAt })
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Delete an order
const deleteOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndDelete({ _id: id })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json(order)

}

//Update an order
const updateOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        order.deliveryStatus = "Delivered";

        const updatedOrder = await order.save();

        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }


}



module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    deleteOrder,
    updateOrder,
    getAllCustomerOrders,
    getOrderByOrderId,


}