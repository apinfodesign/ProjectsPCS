// spec file for hellowuniverse project
var fns = require('../index.js');

describe("hello universe", function() {
  it("Should take a function call and say hello ", function() 
      {
        expect( fns.helloUniverse() ).toEqual("Hello Universe - Hope you are having a great day!");
      })
    });

describe("goodbye universe", function() {
  it("Should take a function call and say goodbye ", function() 
      {
        expect( fns.goodbyeUniverse() ).toEqual("Time to go!");
      })
    });




 