// Primitive Data Types 👉 Immutable (cannot be changed directly) 
let a = 10;
let b = a;
a = 20;
console.log(b); // 10  ✔ Copy by value

// Non-Primitive 👉 Mutable (can be changed) 👉 Stored in heap memory  👉 Variables store reference (address)

let num = {
  a: 10,
};
let newNum = num;
num.a = 30;
console.log(newNum) // 30 ✔ Copy by reference
