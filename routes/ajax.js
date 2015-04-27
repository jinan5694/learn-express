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
	console.log(id);
	res.render('ajax/ajax',{id: id, name: 'ajax name'});
  
});

module.exports = router;
