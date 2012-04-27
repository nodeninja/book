
/**
 * Chapter 04
 */

var everyauth = require('everyauth')
  , express = require('express')
  , post = require('./lib/post')
  , routes = require('./routes')
  , user = require('./lib/user');

    
// To be mongo-fied
everyauth.everymodule.findUserById(function (userId, callback) {
    console.log('finding user: ' + userId);
    user.getUserById(userId, function(err, myUser) {
        // Find posts and bolt on to the user object.  Is there a better way?
        post.getPostByAuthor(myUser['_id'], function(err, posts) {
          myUser.posts = posts;
          callback(err, myUser);      
        });
        
    });
    
});    

// Everyauth authentication module
everyauth.password
    .getLoginPath('/login') // Uri path to the login page
    .postLoginPath('/login') // Uri path that your login form POSTs to
    .loginView('login.ejs')
    .authenticate(function (login, password) {
        var promise = this.Promise();
        user.authenticate(login, password, function(err, user) {
            if (err) return promise.fulfill([err]);
            promise.fulfill(user); 
                       
        });
        
        
        return promise;
    })
    .loginSuccessRedirect('/admin/posts/index') // Where to redirect to after a login
    .loginLocals(function (req, res, done) {
        console.log(req.user);
        done();

    })
    // If login fails, we render the errors via the login view template,
    // so just make sure your loginView() template incorporates an `errors` local.
    // See './example/views/login.jade'

    .getRegisterPath('/register') // Uri path to the registration page
    .postRegisterPath('/register') // The Uri path that your registration form POSTs to
    .registerView('a string of html; OR the name of the jade/etc-view-engine view')
    .validateRegistration(function (newUserAttributes) {
        return null; // success
    })
    .registerUser( function (newUserAttributes) {

        var promise = this.Promise();
       // console.log(newUserAttributes);

        auth.addUser(newUserAttributes.login, newUserAttributes.password, function(err, user) {
            if (err) return promise.fulfill([err]);
            console.log('registered');
            promise.fulfill(user);
        });

        return promise;

    })
    .registerSuccessRedirect('/'); // Where to redirect to after a successful registration
   

var app = module.exports = express.createServer(
    
    express.bodyParser()
    , express.favicon()
    , express.cookieParser()
    , express.session({ secret: 'ht#Z$uayeve'})
    , everyauth.middleware()
    );
    
// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// View helpers
everyauth.helpExpress(app, { userAlias: 'myUser' });

// No layout for now
app.set('view options', {
    layout: false
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/admin/all_posts', routes.allPosts);
app.get('/admin/comments', routes.comments);
app.get('/admin/posts', routes.admin);
app.get('/admin/posts/add', routes.newPost);
app.get('/admin/posts/edit/:postId', routes.editPost);
app.get('/admin/posts/index', routes.admin);
app.get('/admin/tags', routes.tags);
app.get('/admin/tags/add', routes.tagsAdd);
app.get('/admin/users', routes.users);
app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/post/create', routes.create);
app.get('/read', routes.read);

app.post('/admin/posts/add', routes.postNewPost);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
