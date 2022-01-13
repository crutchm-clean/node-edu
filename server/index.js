require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const  PORT = process.env.PORT || 5000
const app = express()
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')


app.use(cors())
app.use(express.json())
app.use('/api', router)



const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e){
      console.log(e)
  }
}

start()