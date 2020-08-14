const User = require('../models/user');
const sendError = require('../utils/errors');
const sendSuccess = require('../utils/success');

module.exports = {
    async createUser(req, res) {
        try {
            const data = req.body;
            const User = await User.create(data);
            return res.status(200).send(User);
        } catch (error) {
            return res.status(400).send(sendError('criar a usuário', error));
        }
    },
    async getUsers(req, res) {
        try {
            const users = await User.find({});
            return res.status(200).send(users);
        } catch (error) {
            console.log('erro ao buscar:', error);
            return res.status(400).send(sendError('buscar usuários', error))
        }
    },
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).sendError('buscar usuário', error);
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const file = await File.findByIdAndUpdate(id, data, { new: true});
            return res.status(200).send(file);
        } catch (error) {
            return res.status(400).send(sendError('atualizar usuário', error))
        }
    }
}