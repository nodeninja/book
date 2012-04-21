
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fs = require('fs');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
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

app.get('/form', function(req, res) {
    fs.readFile('./form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

app.get('/secure', function(req, res) {
    if (req.session.logged) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('Hello ' + req.session.username, 'utf-8');
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('Unknown', 'utf-8');
    }
});

app.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    req.session.logged = true;
    req.session.username = username;
    res.redirect('/secure');
});



app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
