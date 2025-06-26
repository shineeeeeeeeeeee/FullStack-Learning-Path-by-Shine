const express = require('express');

const app = express();

// connect db
const connectDB = require('./db');

// connect routes -> crud
const Users = require('./routes/Users');

const PORT = 3000;

// initiate db and routes
app.use(express.json());
connectDB();
app.use(Users);

app.get('/', (req, res) => {
    console.log("This is home page");
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Server is running at PORT :", PORT);
})