const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const connectdb = require('./db/connectDB');
const web = require('./Routes/web.js');

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DB_url;

connectdb(DATABASE_URL);

app.use(express.json());

app.use("/api/todo",web)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});