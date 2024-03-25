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

gojjo.put('/post', (req, res) => {
    const newPost = req.body

    const isthere = posts.find((item) => item.user == newPost.user)

    if (isthere){
        res.sendStatus(200);
        posts = posts.filter(item => item != isthere)

    }
    else{
        res.sendStatus(404);
    }
})

gojjo.delete('/post/:id', (req, res) => {
    const id = req.params.id ;

    posts = posts.filter(item => item.id != id);

    res.status(200)

})