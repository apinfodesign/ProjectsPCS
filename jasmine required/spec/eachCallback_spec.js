// Test and write a new function each that takes an array and a 
// callback as  arguments and runs the callback for each element of the array.

var each = require('../index3');

function anotherfunction(numberIn){
	return numberIn + 1; 
	};

somearray =      [100, 200, 300, 400, 500];  //test start data
somearrayFinal = [101, 201, 301, 401, 501];   //test final data


describe("a bunch of numbers --  ", function() {
  it("should increase the value of each array element by one.", function() {
     
     expect( each(somearray, anotherfunction)  ).toEqual(somearrayFinal);

 
  });
});