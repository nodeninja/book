
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.read = function(req, res){
  res.render('post', { title: 'Express' })
};