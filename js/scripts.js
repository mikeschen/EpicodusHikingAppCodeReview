var testHike = ["short", "short", "high", "easy"];

var Hikes = {
  macleays: ["short", "medium", "medium", "medium"],
  tryon: ["long", "short", "high", "easy"],
  multnomahs: ["medium", "short", "high", "medium"],
};

var nameHike;

function arraysEqual(testHike, Hikes) {
  for (hike in Hikes) {
    for (i = 0; i < 4; i++) {
      if (testHike[i] !== Hikes[hike][i]) {
        continue;
        return hike;
      }
    }
  }
};

arraysEqual(testHike, Hikes);

      //if (a === b) return true;
      //if (a == null || b == null) return false;
      //if (a.length != b.length) return false;


      function arraysEqual(testHike, Hikes) {
  for (hike in Hikes) {
    console.log(hike);
    for (var i = 0; i < testHike.length; i++) {
        console.log(testHike[i]);
        console.log(hike[i]);

        if (testHike[i] === hike) {
          return true;
        }
    }
  }
};