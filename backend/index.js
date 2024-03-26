import express from 'express';
import mysql from 'mysql';

let app = express();


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.post('/income', (req, res) => {
    console.log(req.body);
});


app.post('/account', (req, res) => {
    console.log(req.body);
});


app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});

