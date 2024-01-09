var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights'); 

// All paths start with '/flights'

// Get flights (index)
router.get('/', flightsCtrl.index);
// GET /flights (new action)
router.get('/new', flightsCtrl.new);
// POST /flights (create action)
router.post('/', flightsCtrl.create);
// GET /flights/:id (show fxn)
router.get('/:id', flightsCtrl.show)

module.exports = router;
