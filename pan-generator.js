/**
 * A predictable pan generator for given number.
 * 
 * generatePan(0) = AAAAA0000A
 * generatePan(1) = AAAAA0000B
 * generatePan(25) = AAAAA0000Z
 * generatePan(26) = AAAAA0001A
 */
module.exports = {
  generatePan: function (id) {
    const denomination = [26, 10, 10, 10, 10, 26, 26, 26, 26, 26];
    var current = id;
    var final = '';
    for (var i = 0; i < 10; i++) {
      var part = current % denomination[i];
      var char = denomination[i] === 26 ? String.fromCharCode(65 + part) : part;
      final = `${char}${final}`;
      current = parseInt(current / denomination[i]);
    }
    return final;
  },
  generateRandomPan: function () {
    return module.exports.generatePan(Math.random() * 100000000000000 % 3089157760000);
  },
  generateSerialPan: function (times) {
    const array = [];
    for (var i = 0; i < times; i++) {
      array.push(module.exports.generatePan(i));
    }
    return array;
  }
}

