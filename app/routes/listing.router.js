const router = require('express').Router();
const announcementController = require('../controller/listing.controller');

router.get('/getAll', announcementController.getAll);

module.exports = router;
