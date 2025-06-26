const express = require('express')
const app = express()
const connectDB = require('./config/db');
const dotenv = require('dotenv')
const productRoutes = require("./routes/productRoutes")

dotenv.config();
const port = process.env.PORT;

connectDB();
// middleware to add
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})
