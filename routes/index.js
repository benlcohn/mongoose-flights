var express = require('express');
var router = express.Router();

// home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flight List' });
});

module.exports = router;
