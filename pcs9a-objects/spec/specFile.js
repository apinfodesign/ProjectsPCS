//the spec file
// example below

var deNext = require('./index.js');

// describe("Hello world", function() {
//   it("says hello", function() {
//     expect(helloWorld()).toEqual("Hello world!");
//   });
// });


describe("Flatten a nested array", function() {
  it("takes a nexted array and flattens it", function() {
    expect(nestedArray.toEqual([ 1, [2],  [ 3, [[4]] ] , 7, [[8]], 9 ]);
    expect(flatten()).toEqual([ 1,2,3,4,7,8,9 ]);
  });
});
