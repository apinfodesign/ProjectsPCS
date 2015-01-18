//the spec file
// example below

var  flattener = require('../index.js');

// describe("Hello world", function() {
//   it("says hello", function() {
//     expect(helloWorld()).toEqual("Hello world!");
//   });
// });


describe("Flatten a nested array", function() {
    it("takes a nexted array and flattens it", function() {
    

    expect(flattener.nestedArray).toEqual([ 1, [2],  [ 3, [[4]] ] , 7, [[8]], 9 ]);

    expect(flattener.flatten(nestedArray)).toEqual([ 1,2,3,4,7,8,9 ]);
 
    expect(flattener.flatten(testArray1)).toEqual([ 1,2,3,4,5,'g','h','d' ]);

  });
});
