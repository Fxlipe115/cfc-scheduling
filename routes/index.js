var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/schedule/:uielement', function(req, res, next) {
  res.render('index', { title: 'Schedule', uielement: req.params.uielement });
});

router.get('/view', function(req, res, next) {
  res.render('index', { title: 'View' });
});

module.exports = router;
