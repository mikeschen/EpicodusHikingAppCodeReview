var Hikes = {
  angelsrest: ["medium", "medium", "medium", "high"],
  beaconrock: ["medium", "easy", "short", "high"],
  coopersspur: ["far", "difficult", "long", "moderate"],
  icecaves: ["far", "difficult", "short", "low"],
  lacamas: ["medium", "easy", "long", "moderate"],
  lookoutmtn: ["far", "easy", "short", "moderate"],
  macleay: ["short", "medium", "medium", "moderate"],
  multnomah: ["medium", "medium", "short", "high"],
  trailof10falls: ["far", "easy", "long", "high"],
  triplefalls: ["medium", "medium", "medium", "moderate"],
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
