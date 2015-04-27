var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	console.log(req.session);
  res.render('index', { title: 'Express', session: req.session });
});

/* login demo */
/*
* res.render('login', {layout: false}); 可以设置false来禁用默认的模板
* res.render('login', {layout: 'login'}); 可以设置模板名称来使用其他模板
*/
router.get('/login', function(req, res) {
	res.render('login', {layout: 'login'});
});

router.post('/login', function(req, res) {
	console.log('post login');
	console.log(req.body); // req.body 可以取到form中的参数
	req.session.user = req.body;
	res.redirect('/');
});
/* logout */
router.get('/logout', function(req, res) {
	console.log('get logout');
	delete req.session.user;
	res.redirect('/login');
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
