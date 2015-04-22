var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* list demo */

router.get('/list', function(req, res) {
	var list = [];
	for(var i=0;i<10;i++){
		list.push({
			id: i,
			name: 'name' + i,
			pwd: 'pwd' + i,
			desc: 'desc' + i,
			remark: 'remark' + i
		});
	}
  res.render('list', {list: list});
});

module.exports = router;
