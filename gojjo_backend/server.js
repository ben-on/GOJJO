import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const gojjo = express();

gojjo.get('/', (req, res) => {
    res.send("Hello from Gojjo");
})

gojjo.listen(process.env.PORT,() => {console.log(`Gojjo is running at port ${process.env.PORT}`)})

