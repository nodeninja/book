// Imports
var express = require('express');
var rolls = require('./rolls');

var app = express.createServer();

app.configure(function() {
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/static'));
});

// Setters
app.set('views', __dirname + '/views');

// Routers
app.get('/', function(req, res) {
	var all = rolls.all();
	var lastWinner = rolls.lastWinner();
	var totalRolls = rolls.totalRolls();
	var p1Wins = rolls.p1Wins();
	var p1Percent = rolls.p1Percent();
	var p2Wins = rolls.p2Wins();
	var p2Percent = rolls.p2Percent();
	res.render('root.jade', 
		{locals: {rolls: all, lastWinner: lastWinner, totalRolls: totalRolls, 
			p1Wins: p1Wins, p1Percent: p1Percent,  
			p2Wins: p2Wins, p2Percent: p2Percent}});
});

// Putters
app.put('/spin', function(req, res) {
	rolls.spin();
	res.redirect('/');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});