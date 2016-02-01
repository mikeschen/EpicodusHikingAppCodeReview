function Hike(drive, distance, views, popularity, difficulty) {
  this.drive = drive;
  this.distance = distance;
  this.views = views;
  this.popularity = popularity;
  this.difficulty = difficulty;
}

Hike.prototype.hikeFinder = function() {
	if (this.distance<35  && this.distance<5 && this.views === "waterfall" && this.popularity === "high" && this.difficulty === "medium") {
		var i = 0;
		for(i in multnomah) {
			if (multnomah.hasOwnProperty(i)) {
			console.log(i + ":" + multnomah[i]);  //add .append here
			}
		}
	}
};

var multnomah = new Hike(30, 2.6, "waterfall", "high", "medium");

var testHike = new Hike(30, 3, "waterfall", "high", "medium");

testHike.hikeFinder();