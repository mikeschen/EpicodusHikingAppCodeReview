var testHike = ["short", "short", "high", "easy"];

var Hikes = {
  macleays: ["short", "medium", "medium", "medium"],
  tryon: ["short", "short", "high", "easy"],
  multnomahs: ["medium", "short", "high", "medium"],
  triplefalls: ["short", "short", "high", "easy"],
};

var nameHike = [];

function arraysEqual(testHike, Hikes) {
  for (hike in Hikes) {
    if (testHike.join() === Hikes[hike].join()) {
      nameHike.push(hike);
    }
  }
};

function randomHike(nameHike) {
  var hike = nameHike[Math.floor(Math.random()*nameHike.length)];
}

var compareHikes = arraysEqual(testHike, Hikes);
var hike = randomHike(nameHike);


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var hikeParametersArray = [];
    $("select:selected").each(function() {
      hikeParametersArray.push($(this).val());

    });
  });
});
