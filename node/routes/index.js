var express = require('express');
var router = express.Router();

/* GET the home pagess. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
