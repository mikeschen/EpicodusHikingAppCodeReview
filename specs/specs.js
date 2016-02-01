describe('Hike', function() {
  it("creates a new hike suggestion with the given drive, distance, views, popularity, difficulty", function() {
    var testHike =  new Hike(10, 5, "waterfall", "medium", "hard");
    expect(testHike.drive).to.equal(10);
    expect(testHike.distance).to.equal(5);
    expect(testHike.views).to.equal("waterfall");
    expect(testHike.popularity).to.equal("medium");
    expect(testHike.difficulty).to.equal("hard");
  });
  it("has a testHike equal finalDestination array", function() {
      expect(testHike.hikeFinder()).to.eql(["drive:30", "distance:2.6", "views:waterfall", "popularity:high", "difficulty:medium"]);
  });
});
