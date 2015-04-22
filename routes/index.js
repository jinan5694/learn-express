var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* list demo */

router.get('/list', function(req, res) {
	var data = {
		name: 'jinan',
		sex: 'male'
	};
  res.render('list', data);
});

module.exports = router;
