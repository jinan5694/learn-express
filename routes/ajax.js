var express = require('express');
var request = require('request');
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

// http interface test
router.get('/httpGet', function(req, res) {
	console.log('router start.');
	request('http://127.0.0.1:3000/server/items', function (error, response, body) {
		console.log('request start.');
		console.log(response.statusCode);
	  if (!error && response.statusCode == 200) {
	    //console.log(body); // Show the HTML for the Google homepage.
	    console.log(body);
	    console.log('type:'+ typeof body);
	    res.json(body);
	    console.log('request end.');
	  }
	});
	console.log('router end.');
});

module.exports = router;
