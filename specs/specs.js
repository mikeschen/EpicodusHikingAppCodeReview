
describe('Hike', function() {
  it("creates a new hike suggestion with the given drive, distance, popularity, difficulty", function() {
    Hikes.newhike = ["no","hard","short","high"];
    expect(Hikes.newhike).to.eql(["no","hard","short","high"]);
  });
  it("returns an array of hikes that match the user input", function() {
    var testHike = ["no", "easy", "short", "high"];
    expect(arraysEqual(testHike)).to.eql(nameHike);
  });
  it("returns a random hike from a list of matches", function() {
    var testHike = ["no", "easy", "short", "high"];
    expect(randomHike(nameHike)).to.eql(nameHike[Math.floor(Math.random()*nameHike.length)]);
  });
});
