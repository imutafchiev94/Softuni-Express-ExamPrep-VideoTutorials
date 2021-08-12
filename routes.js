const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authContorller');

router.use('/', homeController);
router.use('/auth', authController);

module.exports = router;