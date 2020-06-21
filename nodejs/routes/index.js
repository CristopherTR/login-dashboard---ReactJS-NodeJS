var express = require('express');
var router = express.Router();

var users = [
	{nickname:'admin', password:'password'},
	{nickname:'cristopher', password:'123456'},
	{nickname:'playtec', password:'playtec'},
	{nickname:'tecsup', password:'tecsup'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Servidor RetoPlayTec");
});

router.post('/usuarios', function(req, res, next){
	let result = users.find(user => user.nickname == req.body.nickname);
	if(result){
		if(result.password == req.body.password){
			message: "Bienvenido"
			var redir = { redirect: "/Dashboard" };
        	return res.json(redir);
        	
		}else{
			message: "Constraseña incorecta"
			var redir = { redirect: '/'};
        	return res.json(redir);		
        }
	}else{
		message: "Usuario incorecto"
		
	}
})
/*
server.post('/usuarios', passport.authenticate('local'), (req, res, next) => {
    if (req.user) {
    	message:"Login satisfactorio"
        var redir = { redirect: "/dashboard" };
        return res.json(redir);
  } else {
        var redir = { redirect: '/'};
        return res.json(redir);
  }
})
*/

module.exports = router;
