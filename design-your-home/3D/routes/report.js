var express = require('express');
var router = express.Router();

/* GET report page. */
router.get('/', function(req, res, next) {
  res.render('report', { title: 'Report' });
});

module.exports = router;
