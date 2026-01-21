const products = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 14",
    color: "Black",
    price: 999,
    stock: 12,
    category: "Mobile",
    features: ["5G", "Face ID", "128GB Storage"],
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S23",
    color: "Cream",
    price: 899,
    stock: 20,
    category: "Mobile",
    features: ["AMOLED", "5G", "Android"],
  },
  {
    id: 3,
    brand: "Xiaomi",
    model: "Redmi Note 12",
    color: "Blue",
    price: 299,
    stock: 35,
    category: "Mobile",
    features: ["5000mAh Battery", "Fast Charging"],
  },
  {
    id: 4,
    brand: "Dell",
    model: "Inspiron 15",
    color: "Silver",
    price: 750,
    stock: 10,
    category: "Laptop",
    features: ["Intel i5", "8GB RAM", "512GB SSD"],
  },
  {
    id: 5,
    brand: "HP",
    model: "Pavilion x360",
    color: "Gray",
    price: 820,
    stock: 8,
    category: "Laptop",
    features: ["Touch Screen", "2 in 1", "Windows 11"],
  },
  {
    id: 6,
    brand: "Sony",
    model: "WH-1000XM5",
    color: "Black",
    price: 399,
    stock: 15,
    category: "Headphone",
    features: ["Noise Cancelling", "Bluetooth"],
  },
];

// 👉 forEach() – Do something for every item

/*
 1 > What it does
 2 > Loops through all elements
 3 > Does NOT return a new array
 4 > Used for side effects (log, update, push, sum)
*/

products.forEach((product) => {
  if (product.price <= 500) {
    // console.log(product);
  }
});

// ❌ Wrong use

// const result = products.forEach((product) => {
//   product.price = product * 2;
// });
// console.log(result);

// 👉 filter() – Get multiple matching items
/* 
What it does
 1 > Returns a NEW array
 2 > Includes items that pass a condition
 3 > Can return many items or empty array
*/

const result = products.filter((product) => product.price >= 500);
// console.log(result);

// 👉 find() – Get the FIRST matching item
/*
What it does
1 > Returns ONLY ONE item
2 > Stops after first match
3 > Returns undefined if not found
*/

const result2 = products.find((product) => product.color >= "Black");
console.log(result2);
