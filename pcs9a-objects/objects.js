var _= require('lodash');

/////////////////////////////////////////////////

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function(sum, n) { return sum + n; }, 0);

console.log("numbers was: ");
console.log(numbers);

console.log("numbers becomes sum at: ");
console.log(sum);
 

numbers.mySumFunction = function (){
	var sum=0;
	for (var i=0; i<this.length; i++)
		{console.log("we found length is " + i);
		sum = sum + this[i];  	
		}
		return sum; 
     };

console.log( numbers.mySumFunction() );

 
// /////////////////////////////////////////////

var strings = ['hello', ' ', 'world'];
var string = _.reduce(strings, function(concatenated, s) { return concatenated + s; }, '');

console.log("strings was: ");
console.log(strings);

console.log("strings becomes string at: ");
console.log(string);


strings.myConcatFunction = function(){
	var oneString ="";
	for (var i=0; i< this.length; i++){
		oneString = oneString + this[i] ;
	}
	return oneString;
};

console.log ("my new function says: " +strings.myConcatFunction() );

// //////////////////////////////////////////////

var pairs = [
	['name', 'JSI'], 
	['location', { city: 'Portland', 'state': 'OR' }], 
	['school', 'PCS']
	];

var newpairs = _.reduce(pairs, 
				function(features, array){ features[array[0]] = array[1]; return features;},
				{});

console.log("Original pairs is:")
console.log( pairs);

console.log("newpairs is:")
console.log( newpairs );




