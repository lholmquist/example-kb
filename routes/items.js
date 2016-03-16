var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('items', { tittle: 'Items'});
});

module.exports = router;
