require('dotenv').config()

const express = require('express')

const userRoutes = require('./routes/userRoutes')
const orderRoutes = require("./routes/orderRoutes")
const Payments = require('./routes/Payment')
const siteFeedbacks = require('./routes/SiteFeedbackRoutes')

const mongoose = require('mongoose')
const cors = require('cors')
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(cors())


  

// routes
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/site-feedbacks', siteFeedbacks)
app.use('/api/v3/payment', Payments)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // listen for request
  app.listen(process.env.PORT, ()=>{
    console.log('connected to the db and listening on port',process.env.PORT)
  })
})
.catch((error) => {
  console.log(error)
})

