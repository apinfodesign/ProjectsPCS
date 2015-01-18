//  JANUARY 15 2014
// var _= require('lodash');

// /////////////////////////////////////////////////

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = _.reduce(numbers, function(sum, n) { return sum + n; }, 0);

// console.log("numbers was: ");
// console.log(numbers);

// console.log("numbers becomes sum at: ");
// console.log(sum);

// /////////////////////////////////////////////

// var strings = ['hello', ' ', 'world'];
// var string = _.reduce(strings, function(concatenated, s) { return concatenated + s; }, '');

// console.log("strings was: ");
// console.log(strings);

// console.log("strings becomes string at: ");
// console.log(string);

// //////////////////////////////////////////////

// var pairs = [
// 	['name', 'JSI'], 
// 	['location', { city: 'Portland', 'state': 'OR' }], 
// 	['school', 'PCS']
// 	];

// var newpairs = _.reduce(pairs, 
// 				function(features, array){ features[array[0]] = array[1]; return features;},
// 				{});

// console.log("Original pairs is:")
// console.log( pairs);

// console.log("newpairs is:")
// console.log( newpairs );


nestedArray=  [ 1, [2],  [ 3, [[4]] ] , 7, [[8]]] ;
 
// var flatArray = [];

function flatten(arrayArgIn){
	var flatArray = [];

	for (var i=0; i<arrayArgIn.length; i++) {
 	console.log("array length " + arrayArgIn.length);
 	console.log(flatArray);

 		if ( !Array.isArray(arrayArgIn[i]) ) { 
 	  	    flatArray.push(arrayArgIn[i]); 
 	  	} 
	//found an element not array
		else {
			flatArray = flatArray.concat( flatten(arrayArgIn[i]) ); 
	    }
	}
	//console.log(flatArray);
	return flatArray; 
}

console.log(flatten(nestedArray) );




 


// function deNester()
// {
//  		{if (!Array.isArray(arrayArgIn[i] ) ){ flatArray.push(arrayArgIn[i]); }  
// 		//found an element not array
	
// 		else { flatArray = flatArray.concat( flatten(arrayArgIn[i]) ); }
// 		// console.log(flatArray);
// 		}
// 		return flatArray;   
// 	};

// var allFlat = _.reduce(nestedArray, 
// 	function deNester()
// 	, []);



// console.log(flatArray);


// var flat = _.flatten(nestedArray);   //THIS IS LODASH .  It works

// var myflatten = _.reduce(
// 		elements,     							  //elements
// 		function(nestedArray, n) { return sum + n; } ,  //define function
// 		[]  			//specify outut object type, with no content
// 		);  			//end _reduce







// console.log("lodash flatten is:")
// console.log(flat);

// console.log("My flatten is:")
// console.log(myflatten);
