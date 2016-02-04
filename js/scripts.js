var Hikes = {
  angelsrest: ["no", "easy", "short", "high"],
  beacon: ["no", "easy", "short", "high"],
  capehorn: ["no", "difficult", "long", "high"],
  cooperspur: ["no", "difficult", "long", "high"],
  councilcrest: ["yes", "difficult", "short", "high"],
  drycreek: ["no", "easy", "short", "low"],
  elowah: ["no", "easy", "short", "low"],
  eagleCreek: ["no", "easy", "long", "high"],
  fallscreek: ["no", "easy", "short", "low"],
  icecaves: ["no", "difficult", "short", "low"],
  lacamas: ["no", "easy", "long", "high"],
  lookoutmtn: ["no", "easy", "short", "high"],
  marquam: ["yes", "easy", "short", "high"],
  mcleary: ["yes", "easy", "short", "high"],
  memalooselake: ["no", "easy", "short", "high"],
  mirrorlake: ["no", "easy", "short", "high"],
  multnomah: ["no", "easy", "short", "high"],
  silverStar: ["no", "hard", "long", "low"],
  sleepingbeauty: ["no", "hard", "short", "high"],
  tillamook: ["no", "easy", "short", "high"],
  trailoftenfalls: ["no", "easy", "long", "high"],
  triplefalls: ["no", "easy", "short", "high"],
  tryon: ["yes", "easy", "short", "high"],
  wapatoGreenway: ["no", "easy", "short", "high"]
};

var nameHike = [];

function arraysEqual(hikeParametersArray, Hikes) {
  for (hike in Hikes) {
      debugger;
    if (hikeParametersArray.join() === Hikes[hike].join()) {
      nameHike.push(hike);
    }
  }
  return nameHike;
};

function randomHike(nameHike) {
  return nameHike[Math.floor(Math.random()*nameHike.length)];
};

function randomProperty(Hikes) {
  var temp_key;
  var keys = [];
  for(temp_key in Hikes) {
    keys.push(temp_key);
  }
  return keys[Math.floor(Math.random()*keys.length)];
}

$(document).ready(function() {
  $("form#findhike").submit(function(event) {
    var hike = [];
    var hikeParametersArray = [];
    $("select option:selected").each(function() {
      hikeParametersArray.push($(this).val());
    });
    var compareHikes = arraysEqual(hikeParametersArray, Hikes);
    hike = randomHike(compareHikes);
    window.location.href = "http://mikeschen.github.io/EpicodusHikingApp/hikes/" + hike + ".html";
    event.preventDefault();
  });
  $("form#feelinglucky").submit(function(event) {
    var feelingLucky = randomProperty(Hikes);
    window.location.href = "http://mikeschen.github.io/EpicodusHikingApp/hikes/" + feelingLucky + ".html";
    event.preventDefault();
  });
});
