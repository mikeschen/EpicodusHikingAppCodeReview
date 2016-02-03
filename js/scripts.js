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
  wapatoGreenway: ["no", "easy", "short", "high"],
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
    window.location.href = "http://mikeschen.github.io/epicodushikingapp/hikes/multnomah.html" //+ hike + ".html";


  });
});
