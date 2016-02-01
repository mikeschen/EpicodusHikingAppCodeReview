
describe('Hike', function() {
  it("creates a new hike suggestion with the given drive, distance, popularity, difficulty", function() {
    var testHike =  new Hike(10, 5, "medium", "hard");
    expect(testHike.drive).to.equal(10);
    expect(testHike.distance).to.equal(5);
    expect(testHike.views).to.equal("waterfall");
    expect(testHike.popularity).to.equal("medium");
    expect(testHike.difficulty).to.equal("hard");
  });
  it("creates a suggestion of Multnomah Falls when it equals waterfall and viewpoint views and difficulty medium and popularity high"), function() {
      expect().to.equal();

  }
});
