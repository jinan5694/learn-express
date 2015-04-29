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

router.get('/http', function(req, res) {
	var options = {
		method: 'GET',
		uri: 'http://127.0.0.1:3000/server/items',
		json: true
	};
	request.get(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.json(body);
	  }
	});
});

router.get('/http/:id', function(req, res) {
	var options = {
		method: 'GET',
		uri: 'http://127.0.0.1:3000/server/items/'+req.params.id,
		json: true,
		body: req.body
	};
	request.get(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.json(body);
	  }
	});
});

router.post('/http', function(req, res) {
	var options = {
		method: 'POST',
		uri: 'http://127.0.0.1:3000/server/items',
		json: true,
		body: req.body
	};
	request.post(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.json(body);
		}
	});
});

router.put('/http/:id', function(req, res) {
	console.log('http put--------------------------------');
	var options = {
		method: 'PUT',
		uri: 'http://127.0.0.1:3000/server/items/'+req.params.id,
		json: true,
		body: req.body
	};
	request.put(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.json(body);
	  }
	});
});

router.delete('/http/:id', function(req, res) {
	var options = {
		method: 'DELETE',
		uri: 'http://127.0.0.1:3000/server/items/'+req.params.id,
		json: true
	};
	request.del(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.json(body);
	  }
	});
});

module.exports = router;
