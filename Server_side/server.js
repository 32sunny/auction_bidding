const express = require('express');
const connectDB = require('../Server_side/config/database')
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./Routes/Data.routes')
const authRoute = require('./Routes/authRoutes')

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json()); 



connectDB();

app.use('/data', userRoute)
app.use('/auth' ,authRoute )

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  

