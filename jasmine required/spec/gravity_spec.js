// spec/gravity_spec.js

var fns = require('../index');

 describe("fallingTime", function() {
  it("should take distance and give valid time ", function() {
    expect(fns.fallingTime(10)).toBeCloseTo(1.43, 2);
    expect(fns.fallingTime(4*4.9)).toEqual(2);
    expect(fns.fallingTime(9*4.9)).toEqual(3);
    expect(fns.fallingTime(64*4.9)).toEqual(8);
    expect(fns.fallingTime(-1)).toEqual(NaN);
  });
});

 describe("distance Fallen", function() {
  it("should take time and return distance ", function() {
      expect(fns.distanceFallen(8)).toEqual(64*4.9);
  });
});

