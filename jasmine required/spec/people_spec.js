//people_spec.js
var increaseAgeByOne = require('../index2');

var people =[
			{name: "Bob",  age: 30},
			{name: "Sally", age: 40},
			{name: "John", age: 50}
			];

var peopleFinal =[
			{name: "Bob",  age: 31},
			{name: "Sally", age: 41},
			{name: "John", age: 51}
			];


describe("a bunch of people", function() {
  it("should increase each person age by one.", function() {
     expect(increaseAgeByOne(people)).toEqual(peopleFinal);

    // expect(fallingTime(4*4.9)).toEqual(2);
    // expect(fallingTime(9*4.9)).toEqual(3);
    // expect(fallingTime(64*4.9)).toEqual(8);
    // expect(fallingTime(-1)).toEqual(NaN);
  });
});