const express = require('express') // Import express 
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const dotenv = require('dotenv');
const clientRouteAuth = require('./routes/authentication')
const validator = require('express-validator')

const app = express()

dotenv.config(); 


//require('dotenv').config()

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookies());
app.use(validator());

// routes communication to routes folder
app.use("/api", clientRouteAuth);


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
