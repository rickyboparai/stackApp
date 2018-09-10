//dependencies for express server 
const express = require("express"); 
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
 
// Body Parser Middleware
app.use(bodyParser.json());


const options = {  
    url: 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8' 
    }
};

// Index Route
app.get('/posts', function(req, res)  { 
        request(options, function(err, output, body) {  
        var json = JSON.parse(body);
        console.log(json);  
        res.json(json)  
    });  
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, function() {  
    console.log("My API is running...");
});

 