const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const User = require('../models/User');

router.post('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name, 
            user: req.user.id 
        });

        
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/user/:user_id', async (req, res) => {
    try {
        const posts = await Post.find({ user: req.params.user_id }).sort({ date: -1 });
        if (!posts) {
            return res.status(404).json({ message: 'No posts found for this user' });
        }
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/me', auth, async (req, res) => {
    try {
        
        const user = await User.findById(req.user.id).select('-password');
        const posts = await Post.find({ user: req.user.id }).sort({ date: -1 });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ user, posts });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
