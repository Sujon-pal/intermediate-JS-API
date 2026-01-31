let count = 0;

const intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
