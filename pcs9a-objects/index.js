// version 3 january 16 2014  -  Add some tests
//
// convert  yestedays function to method
//
//
nestedArray=  [ 1, [2],  [ 3, [[4]] ] , 7, [[8]], 9 ] ;
testArray1 =  [ [1],[2],3,4,5,['g'],[ ['h'],['t'] ] ];
 
// var flatArray = [];

function flatten(arrayArgIn){
	var flatArray = [];

	for (var i=0; i<arrayArgIn.length; i++) {
 	console.log("array length " + arrayArgIn.length);
 	//console.log(flatArray);

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

//////////////////////

nestedArray.deNest = function(){

	var flatArray = [];

	for (var i=0; i<this.length; i++) {
 	console.log("array length " + this.length);
 	//console.log(flatArray);

 		if ( !Array.isArray(this[i]) ) { 
 	  	    flatArray.push(this[i]); 
 	  	} 
 		else {
			flatArray = flatArray.concat( flatten(this[i]) ); 
	    }
	}
 	return flatArray; 
};

testArray1.deNest = nestedArray.deNest;


console.log(nestedArray.deNest() );
console.log(testArray1.deNest() );

module.exports  ={
		'flatten':  flatten,
 		'nestedArray': nestedArray,
 		'testArray1' : testArray1
};

