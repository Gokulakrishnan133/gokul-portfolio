const express = require('express');
const {getAllContacts, createContact} = require('../controllers/contactFormController');
const router = express.Router();

router.route('/').get(getAllContacts).post(createContact);
module.exports = router;