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


// Read all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Create a new post
app.post('/posts', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    const newPost = { id: nextId++, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Read a single post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

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


