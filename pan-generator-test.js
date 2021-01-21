const { generatePan, generateRandomPan, generateSerialPan } = require('./pan-generator');

function runTests() {
  test(generatePan(0), "AAAAA0000A");
  test(generatePan(1), "AAAAA0000B");
  test(generatePan(25), "AAAAA0000Z");
  test(generatePan(26), "AAAAA0001A");

  log(generateRandomPan());
  log(generateRandomPan());
  log(generateRandomPan());
  log(generateRandomPan());
  log(generateRandomPan());
  log(generateRandomPan());
  
  log(generateSerialPan(100));
}

function test(actual, expected) {
  if (actual !== expected) {
    console.log(`failed -> actual ${actual} , expected ${expected}`)
  } else {
    console.log('.');
  }
}

function log(object){
  console.log(object);
}

runTests();
