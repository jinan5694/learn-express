var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	// 接口调用测试
	http.get('http://121.40.127.12:8080/CM-workflow-server/queryList1',function(res){
    console.log('get response Code :' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function(data){
    	console.log('-----------------------------------------------------');
    	console.log(data);
    	console.log('-----------------------------------------------------');
    });
	}).on('error',function(e){
        console.log("Got error: " + e.message);
  });
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
