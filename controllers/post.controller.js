const Post = require('../models/image');
const sendError = require('../utils/errors');
const sendSuccess = require('../utils/success');

module.exports = {
    async createPost(req, res) {
        try {
            const data = await Post.create(req.body)
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send(sendError('criar a publicação', error));
        }
    },
    async getPosts(req, res) {
        try {
            const username = req.body.username;
            const user = await Post.find({});
            const images = user.filter(u => u.username == username)
            return res.status(200).send(images);
        } catch (error) {
            return res.status(400).send(sendError('buscar publicações', error))
        }
    },
    async getPostById(req, res) {
        try {
            const id = req.params.id;
            console.log(id)
            const post = await Post.findById(id);
            return res.status(200).send(post);
        } catch (error) {
            return res.status(400).send(sendError('buscar publicação', error));
        }
    },
    async getPostsById(req, res) {
        try {
            const id = req.params.id;
            const user = await User.find({id: id});
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send(sendError('buscar publicações', error));
        }
    }
}