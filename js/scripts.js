var Hikes = {
  angelsrest: ["medium", "medium", "medium", "high"],
  beacon: ["medium", "easy", "short", "high"],
  cooperspur: ["far", "difficult", "long", "moderate"],
  ice-caves: ["far", "difficult", "short", "low"],
  lacamas: ["medium", "easy", "long", "moderate"],
  lookout-mtn: ["far", "easy", "short", "moderate"],
  mcleary: ["short", "medium", "medium", "moderate"],
  multnomah: ["medium", "medium", "short", "high"],
  trailoftenfalls: ["far", "easy", "long", "high"],
  triple-falls: ["medium", "medium", "medium", "moderate"],
  tryon: ["short", "easy", "short", "high"],
};

var nameHike = [];

function arraysEqual(testHike, Hikes) {
  for (hike in Hikes) {
    if (testHike.join() === Hikes[hike].join()) {
      nameHike.push(hike);
    }
  }
  return nameHike;
};

function randomHike(nameHike) {
  return nameHike[Math.floor(Math.random()*nameHike.length)];
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var hikeParametersArray = [];
    $("select:selected").each(function() {
      hikeParametersArray.push($(this).val());
    });
    var compareHikes = arraysEqual(hikeParametersArray, Hikes);
    console.log(compareHikes);
    var hike = randomHike(compareHikes);
    window.location = "../hikes/" + hike + ".html";

  });
});
