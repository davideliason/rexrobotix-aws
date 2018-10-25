const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/users', (req,res) => {
    res.json([{
        id: 1,
        username: "David"
    }, {
        id: 2,
        username: "Johnny"
    }]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

  const port = process.env.PORT || 8080;
  const test = process.env.TEST;
  app.listen(port);
  
  console.log(`testing one two three ${test}`)
  console.log(`Server listening on ${port}`);