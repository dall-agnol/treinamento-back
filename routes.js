const express = require('express');
const routes = express.Router();

const postController = require('./controllers/post.controller');
const userController = require('./controllers/user.controller')

//POSTS
routes.post('/post', postController.createPost);
routes.get('/posts', postController.getPosts);
routes.get('/post/:id', postController.getPostById);

//USERS

routes.post('/user', userController.createUser);
routes.put('/user/:id', userController.updateUser);
routes.get('/user/:id', userController.getUserById);

module.exports = routes;