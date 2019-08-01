'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/school-controller'); //FIX
const authService = require('../services/auth-service');

router.get('/', controller.get);

router.get('/:name',controller.getById);

router.post('/', controller.post);

module.exports = router;