var _= require('lodash');

var greet = function(greeting, name){ return greeting + ' ' + name; };

var hi = _.partial(greet, 'hello there');

hi('fred');  

some = hi('fred'); 

console.log(some);

////////////////////////////////////////

var partial = function(arg) {
  
   	console.log("here is partial");
};

var greet = function(greeting, name) {
	  return greeting + ' ' + name;
};

var hihi = partial(greet, 'nice to meet you ');

another = hihi('Andrew');

console.log(another);       