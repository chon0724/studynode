var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/',function(req, res){
	res.send('hello home page');
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/img.jpg">')
})
app.get('/login',function(req,res){
	res.send('login plz');
})
app.listen(3000,function(){
	console.log('conneted 3000 port');
});

