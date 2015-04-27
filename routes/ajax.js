var express = require('express');
var router = express.Router();

/* ajax demo. */
router.get('/', function(req, res) {
  res.render('ajax/ajax');
});

router.get('/users', function(req, res) {
  res.json({name: 'jinan'});
});

router.get('/users/:id', function(req, res) {
	var id = req.params[0];
	res.json({name: 'jinan'});
});

router.post('/users', function(req, res) {
	var name = req.body.name;
	res.json({name: name});
});

router.put('/users/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.params);
	console.log(req.body);
	res.json({id: id,name: req.body.name});
});

router.delete('/users/:id', function(req, res) {
	var id = req.params.id;
	res.json({id: id});
});

module.exports = router;
