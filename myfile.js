const callCounter = (function () {
  console.log(`===========================`);
  console.log(`calling starts at ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} : `);
  console.log(`===========================`);
  let count = 0;

  return function () {
    count++;
    const currentISTTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    console.log(`Function called ${count} times at ${currentISTTime}`);
  };
})();

callCounter();
callCounter();
callCounter();
callCounter();
callCounter();
