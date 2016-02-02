var testHike = ["medium", "short", "high", "medium"];

var Hikes = {
  macleays: ["short", "medium", "medium", "low"],
  multnomahs: ["medium", "short", "high", "medium"],
};

function arraysEqual(testHike, Hikes) {
  for (hike in Hikes) {
      if (testHike === Hikes[hike]) {
        return hike;
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