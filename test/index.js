var fromEntries = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete Object.fromEntries;

var fromEntries = require('../cjs');
test();

function test() {
  var map = new Map;
  map.set('a', 1);
  map.set('b', 2);
  console.assert(
    JSON.stringify(fromEntries(map)) ===
    JSON.stringify({a: 1, b: 2}),
    'same JSON outcome'
  );
  console.assert(
    JSON.stringify(fromEntries(map.entries())) ===
    JSON.stringify({a: 1, b: 2}),
    'same JSON outcome'
  );
  try {
    fromEntries('nope');
    console.assert(false, 'non-iterable should fail');
  } catch (OK) {
    console.assert(true);
  }
}
