const express = require('express');
const router = express.Router();
const request = require('request');

// declare axios for making http requests
 
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const options = {  
    url: 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8' 
    }
};

// Index Route
router.get('/posts', function(req, res)  { 
        request(options, function(err, output, body) {  
        var json = JSON.parse(body);
        console.log(json);  
        res.json(json)  
    });  
});

module.exports = router;