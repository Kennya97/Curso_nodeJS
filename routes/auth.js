const express = require('express');
const auth = require('../controllers/auth');
const controller = require('../controllers/auth');

const authRouter = express.Router()

authRouter.get('/', controller.renderAuth);


module.exports = authRouter