const express = require('express') // Import express 
const app = express() 

require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Hello World");
}); 

const portAccess = process.env.PORT || 8000

app.listen(portAccess, () => {
    console.log(`Server on port ${portAccess}`);
})