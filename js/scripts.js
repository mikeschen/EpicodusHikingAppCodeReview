var Hikes = {
  angelsrest: ["yes", "difficult", "short", "high"],
  beacon: ["yes", "easy", "short", "high"],
  capehorn: ["yes", "difficult", "long", "high"],
  cooperspur: ["yes", "difficult", "long", "high"],

  councilcrest: ["no", "difficult", "short", "high"],
  drycreek: ["yes", "difficult", "long", "low"],
  elowah: ["yes", "easy", "short", "low"],
  eagleCreek: ["yes", "easy", "long", "high"],
  fallscreek: ["yes", "easy", "short", "low"],
  icecaves: ["yes", "difficult", "short", "low"],
  kelleyPoint: ["no", "easy", "long", "low"],
  lacamas: ["yes", "easy", "long", "low"],
  lookoutmtn: ["yes", "easy", "short", "high"],
  marquam: ["no", "easy", "short", "high"],
  macleay: ["no", "easy", "long", "high"],
  memalooselake: ["yes", "difficult", "short", "low"],
  mirrorlake: ["yes", "easy", "short", "high"],
  multnomah: ["yes", "easy", "short", "high"],
  oakBottom: ["no", "easy", "short", "high"],
  silverStar: ["yes", "difficult", "long", "low"],
  sleepingbeauty: ["yes", "difficult", "short", "high"],
  tillamook: ["yes", "easy", "long", "high"],

  trailoftenfalls: ["yes", "easy", "long", "high"],
  triplefalls: ["yes", "easy", "short", "high"],
  tryon: ["no", "easy", "short", "high"],
  wapatoGreenway: ["yes", "easy", "short", "high"],
  washingtonPark: ["no", "easy", "short", "high"],
  powellButte: ["no", "difficult", "short", "high"],
  wildwood: ["no", "difficult", "long", "low"],
  whippleCreekLoop: ["yes", "easy", "short", "low"],
  marshallPark: ["no", "easy", "short", "low"],
  tolindaRidge: ["no", "easy", "long", "low"],
  pittockMansion: ["no", "easy", "long", "high"],
  marquamTrailCouncil: ["no", "difficult", "long", "low"],
  firelane15: ["no", "difficult", "short", "low"],
  rockyButte: ["no", "difficult", "short", "low"],
  mapleWildwoodLoop: ["no", "difficult", "long", "high"],
  warriorPoint: ["no", "difficult", "long", "high"]
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
