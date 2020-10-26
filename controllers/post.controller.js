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
            const data = await Post.find({});
            return res.status(200).send(data);
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
            const photos = await Post.find({});
            console.log('images: ', photos)
            const images = photos.filter(u => u.id == id)
            return res.status(200).send(images);
        } catch (error) {
            return res.status(400).send(sendError('buscar publicações', error));
        }
    }
}