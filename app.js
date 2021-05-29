const express = require('express');

const app = express();
const ConnectDB = require('./config/db')

var cors = require('cors');

const books = require('./routes/api/books');

app.get('/', (req, res)=>{
    res.send("Server is running. Welcome to My world")
});

ConnectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/books', books);

const port = process.env.PORT||8080;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});