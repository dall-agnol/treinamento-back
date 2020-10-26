const User = require('../models/user');
const sendError = require('../utils/errors');
const sendSuccess = require('../utils/success');

module.exports = {
    async createPost(req, res) {
        try {
            const id = req.body.id;
            console.log('params: ', req.body);
            const user = await User.findById(id);
            console.log('user: ', user);
            const data = {
                img: req.body.photo,
                description: req.body.description
            }
            user.photos.push(data);
            const post = await User.findByIdAndUpdate(id, user, { new: true });
            return res.status(200).send(post);
        } catch (error) {
            return res.status(400).send(sendError('criar a publicação', error));
        }
    },
    async getPosts(req, res) {
        try {
            const id = req.body.id;
            const user = await User.findById(id)
            return res.status(200).send(user.photos);
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