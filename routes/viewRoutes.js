const express = require('express');
const {getPersonalPortfolio} = require('../controllers/viewController') 
const router = express.Router();


router.route('/').get(getPersonalPortfolio);

module.exports = router;