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

// Update a post by ID
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    post.content = content;
    res.json(post);
});


// Delete a post by ID
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted' });
});


