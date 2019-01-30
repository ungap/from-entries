var fromEntries = Object.fromEntries || function fromEntries(iterable) {
  var entries = ('entries' in iterable ? iterable.entries() : iterable);
  var object = {};
  var entry;
  while ((entry = entries.next()) && !entry.done) {
    var pair = entry.value;
    Object.defineProperty(object, pair[0], {
      configurable: true,
      enumerable: true,
      writable: true,
      value: pair[1]
    });
  }
  return object;
};
module.exports = fromEntries;
