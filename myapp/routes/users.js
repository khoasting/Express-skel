var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addcustomer');

});
router.post('/', function(req, res, next) {
  console.log(res.body());

});
module.exports = router;
