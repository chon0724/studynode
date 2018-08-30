var fs = require('fs');

// sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//async
console.log(2);
fs.readFile('data.txt',{encoding:'utf8'},function(err, data){
	console.log(data);
} )