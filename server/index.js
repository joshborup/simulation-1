const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const bc = require('./bin_controller');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const shelfEndPoint = '/api/shelf/:id';
const binEndPoint = '/api/bin/:id';

app.get(shelfEndPoint, bc.readALL);
app.get(binEndPoint, bc.readOne);
app.put(binEndPoint, bc.update);
app.post(shelfEndPoint, bc.create);
app.delete(binEndPoint, bc.delete);

const port = 4000;

app.listen(port, () => console.log(`listening on port ${port}`))