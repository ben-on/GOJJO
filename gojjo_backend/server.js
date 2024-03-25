import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

// dummy post
const posts = [
    {
        user: "benon",
        content: "This is benon"
    }
]

const gojjo = express();
gojjo.use(express.json)

gojjo.get('/', (req, res) => {
    res.send("Hello from Gojjo");
})

gojjo.listen(process.env.PORT,() => {console.log(`Gojjo is running at port ${process.env.PORT}`)})


gojjo.get('/post', (req, res) => {
    res.status(200).json(posts)
})

gojjo.post('/post', (req, res) => {
    const newPost = req.body
    posts.push(newPost)
    res.sendStatus(201);
})