var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/development', function(req, res, next) {
  res.render('development');
});
router.get('/management', function(req, res, next) {
  res.render('management');
});
router.get('/instantquote', function(req, res, next) {
  res.render('quote');
});
module.exports = router;
