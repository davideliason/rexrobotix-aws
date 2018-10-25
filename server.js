const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;
const test = process.env.TEST;

app.get('/', (req,res) => {
    res.end("hello world");
});

app.listen(port, () => {
    console.log(`server at ${port}`)
    console.log(test);
});