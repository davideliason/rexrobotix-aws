const express = require('express');
const path = require('path');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;
const test = process.env.TEST;
const uri = process.env.DB_MLAB;

app.use(express.static(path.join(__dirname, 'client/build')));

MongoClient.connect(uri, { useNewUrlParser: true }, (err, database) => {
    console.log("db connection");

    app.get('/api/users', (req,res) => {
        res.json([{
            id: 1,
            username: "David"
        }, {
            id: 2,
            username: "Johnny"
        }]);
    });

    // Catchall handler for any other requests --> CRA index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

});



  app.listen(port);
  
  console.log(`testing one two three ${test}`)
  console.log(`Server listening on ${port}`);