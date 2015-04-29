var express = require('express');
var router = express.Router();

/* 模拟http服务器，返回json格式数据. */

var item = {
	'name': '纪南',
	'description': 'this is a item.'
};

router.get('/items', function(req, res) {
  res.json(item);
});

router.get('/items/:id', function(req, res) {
	item.id = req.params.id;
	res.json(item);
});

router.post('/items', function(req, res) {
	res.json(req.body);
});

router.put('/items/:id', function(req, res) {
	item.id = req.params.id;
	res.json(item);
});

router.delete('/items/:id', function(req, res) {
	res.json({id: req.params.id});
});

module.exports = router;
