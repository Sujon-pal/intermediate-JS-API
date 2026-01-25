// 🔴 Falsy Values

/*
Value -> 	Meaning
false	-> Boolean false
0	-> Number zero
-0	-> Negative zero
0n	-> BigInt zero
""	-> Empty string
null ->	No value
undefined	-> Not assigned
NaN	-> Not a number
*/

// 🟢 Truthy Values

/*
true
1
-1
"hello"
"0"
" "
[]
{}
function(){}

*/


let name = "";

if (name) {
  console.log("Name exists");
} else {
  console.log("No name"); // runs
}


console.log([] == false) // true 😱

console.log("" == 0) // true
console.log("" === 0) // False
