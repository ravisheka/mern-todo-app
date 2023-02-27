const express = require ('express')
const dotenv=require('dotenv')
const connectDB= require('./config/db')
const routes =require('./routes/ToDoRoute')
const cors =require('cors')
//configure env
dotenv.config();
//databse config
connectDB();
const app =express()
const PORT =process.env.port || 5000
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(PORT,()=>console.log(`Listening on: ${PORT}`))