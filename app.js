const express = require('express') // Import express 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const clientRoute = require('./routes/client')
const app = express()
dotenv.config(); 


//require('dotenv').config()


// routes communication to routes folder
app.use("/api", clientRoute);


const portAccess = process.env.PORT || 8000

app.listen(portAccess, () => {
    console.log(`Server on port ${portAccess}`);
})


// mongodb connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))


  


  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });
