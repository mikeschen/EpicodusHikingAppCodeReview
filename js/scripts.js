function Hike(drive, distance, views, popularity, difficulty) {
  this.drive = drive;
  this.distance = distance;
  this.popularity = popularity;
  this.difficulty = difficulty;
}

Hike.prototype.drive = function() {
  var drive = "";
  if(drive < 10) {
    drive = "short";
  }
  else if(drive < 35) {
    drive = "medium";
  }
  else {
    drive = "long";
  }
  return drive;
}

Hike.prototype.distance = function() {
  var distance = "";
  if(distance <= 3) {
    distance = "short";
  }
  else if(distance <= 8) {
    distance = "medium";
  }
  else {
    distance = "long";
  }
  return distance;
}


var multnomah = new Hike("medium", "short", "waterfall", "high", "medium");

var testHike = new Hike("medium", "short", "waterfall", "high", "medium");

testHike.hikeFinder();


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var hikeParametersArray = [];
    $("select:selected").each(function() {
      hikeParametersArray.push($(this).val());
      
    });
  });
});
