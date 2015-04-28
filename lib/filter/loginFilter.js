// 登录拦截器
var publicPaths = [
'/login',
'/logout',
'/server/items'
];

module.exports = function() {
	return function(req, res, next) {
		if ( publicPaths.indexOf(req.path) >= 0 ) {
			next();    
		} else { 
			if(req.session.user) {
				next();
			}else{
				res.redirect('/login');
			}
		}
	}
};