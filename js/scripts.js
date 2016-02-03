var Hikes = {
  angelsrest: ["medium", "medium", "medium", "high"],
  beacon: ["medium", "easy", "short", "high"],
  cooperspur: ["far", "difficult", "long", "moderate"],
  icecaves: ["far", "difficult", "short", "low"],
  lacamas: ["medium", "easy", "long", "moderate"],
  lookoutmtn: ["far", "easy", "short", "moderate"],
  mcleary: ["short", "medium", "medium", "moderate"],
  multnomah: ["medium", "medium", "short", "high"],
  trailoftenfalls: ["far", "easy", "long", "high"],
  triplefalls: ["medium", "medium", "medium", "moderate"],
  tryon: ["short", "easy", "short", "high"],
};

var nameHike = [];

function arraysEqual(hikeParametersArray, Hikes) {
  for (hike in Hikes) {
    if (hikeParametersArray.join() === Hikes[hike].join()) {
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
    var hike = [];
    var hikeParametersArray = [];
    console.log(hikeParametersArray);
    $("select option:selected").each(function() {
      hikeParametersArray.push($(this).val());
      console.log(hikeParametersArray);
    });
    var compareHikes = arraysEqual(hikeParametersArray, Hikes);
    console.log(compareHikes);
    hike = randomHike(compareHikes);
    console.log(hike);
    window.location.href = "http://mikeschen.github.io/epicodushikingapp/hikes/" + hike + ".html";


  });
});
