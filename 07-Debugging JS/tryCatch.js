let num = 44;
try {
  if (num === 45) {
    console.log("True");
  } else {
    throw "Number not matched";
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Always runs");
}

console.log("helllo");
