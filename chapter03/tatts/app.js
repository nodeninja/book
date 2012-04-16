
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , tatts = require('./tatts');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);

app.get('/api/raceinfo', function(req, res) {
  tatts.getMeetings(function(err, meetings) {
    if (err) {
      console.log(err);
      res.write('parsing error');
    }
    else {
      return res.send(meetings);
    }
  }); 
  
});

app.get('/backbone', function(req, res) {
  res.render('backbone.jade', {title: 'Backbone'});    
});

app.get('/raceinfo', function(req, res) {
  tatts.getMeetings(function(err, meetings) {
    if (err) {
      console.log(err);
      res.write('parsing error');
    }
    else {
      console.log(meetings[0]);
      res.render('raceinfo.jade', {title: 'Race Info', locals: {meetings: meetings}});
    }
  });    
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
