var express = require('express');
var router = express.Router();

var FirebaseController = require('./../controllers/firebase.controller');
var UntilController = require('./../controllers/until.controller');

// router.get('/get-token', FirebaseController.getAccessToken);
router.get('/resize-image', UntilController.resizeImage);

module.exports = router;    