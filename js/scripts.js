var testHike = ["medium", "short", "high", "medium"];
var testHike2 = ["short", "medium", "medium", "high"];

var multnomahs = ["medium", "short", "high", "medium"];
var macleays = ["short", "medium", "medium", "medium"];
var tryon = ["short", "short", "high", "easy"];
var hikeArray = [multnomahs, macleays];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

arraysEqual(testHike, multnomahs);