const callCounter = (function () {
  console.log(`===========================`);
  console.log(`calling starts : `);
  console.log(`===========================`);
  let count = 0;

  return function () {
    count++;
    console.log(`Function called ${count} times`);
  };
})();

callCounter();
callCounter();
callCounter();
