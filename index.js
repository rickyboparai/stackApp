//dependencies for express server 
const express = require("express"); 
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
 const api = require('./routes/api');

const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
 
// Body Parser Middleware
app.use(bodyParser.json());

app.use('/', api);

// consume remote API


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, function() {  
    console.log("My API is running...");
});

 