const express = require('express');
const path = require('path');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;
const test = process.env.TEST;
const uri = process.env.DB_MLAB;

// APP CONFIG
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, 'client/build')));

MongoClient.connect(uri, { useNewUrlParser: true }, (err, database) => {
    console.log("db connection");
    db = database.db('rexrobotix-aws');

    app.get('/api/quotes', (req,res) => {
        // res.json([{
        //     id: 1,
        //     username: "David"
        // }, {
        //     id: 2,
        //     username: "Johnny"
        // }]);

        db.collection('quotes').find().toArray( (err,quotes)=>{
            // res.render('index.ejs', { quotes: quotes})
  
            // back to serving data as JSON as API
            res.json(quotes);
        });
    });

    app.post('/newquote', (req,res)=>{
        db.collection('users').insertOne(
            {
            "_id" : req.body.name + req.body.quote,
			 "name" : req.body.name,
			 "quote" : req.body.quote
            }
        )
    })

    // Catchall handler for any other requests --> CRA index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

});



  app.listen(port);
  
  console.log(`testing one two three ${test}`)
  console.log(`Server listening on ${port}`);