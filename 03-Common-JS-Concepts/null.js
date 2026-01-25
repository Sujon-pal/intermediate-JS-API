let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

// 🤷‍♂️ Function with no return
function test(a, b) {
  let sum = a + b;
}
console.log(test()); // undefined

// 🤷‍♂️ Missing function argument
function add(a, b) {
  console.log(a + b); // NaN
  console.log(a, b); // undefined
}
add();
