//////////// jan 14 2015 class excerise on scope at pcs
// http://portlandcodeschool.github.io/jsi/2015/01/14/closures-scope/

// var holder = 5;
var sequence1 = counter();
var sequence2 = counter();
 
sequence1(); 
sequence2();
sequence2();
sequence1();
sequence1();
sequence1();
sequence1();
sequence1();
sequence2();

function reset(){
	holder = 15;
	}; 

function counter(){   
	var holder = 5;
	function sequenceGen(){
		holder=holder+1;
		console.log("holder is ", holder);
 		return holder;
		};

	console.log("holder below sequenceGen is ", holder);
 	return sequenceGen;
 };

  