const express = require('express') // Import express 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); 

//require('dotenv').config()



const app = express() 
app.get('/', (req, res) => {
    res.send("Hello World");
}); 

const portAccess = process.env.PORT || 8000

app.listen(portAccess, () => {
    console.log(`Server on port ${portAccess}`);
})

mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))


  


  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });
