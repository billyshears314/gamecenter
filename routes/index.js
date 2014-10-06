var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('gamecenter', { title: 'Express' });
});

router.get('/standby', function(req, res) {
	 var db = req.db;
    var gametype = req.query.gametype;
    console.log(gametype);
   	db.game.find({"gametype":gametype},{},function(e,docs){
    	console.log(JSON.stringify(docs));
        res.render('standby', {
            "games" : docs,
            title: gametype
        });
    });
 // res.render('standby', { title: 'Express' });
});

router.get('/tictactoe', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/connectfour', function(req, res) {
  res.render('connectfour', { title: 'Express' });
});

module.exports = router;
