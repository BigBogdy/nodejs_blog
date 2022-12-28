const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');
const createPath = require('../helpers/create-path');
const getContacts = require('../controllers/contacts-controller');

router.get('/contacts', getContacts);

module.exports = router;
