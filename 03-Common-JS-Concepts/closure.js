// Example - 1

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
const result = counter();
result();
result();
result();
result();

// Example -- 2

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    },
  };
}

const account = bankAccount();
account.withdraw(1900)
account.deposit(900)

for (var i = 1; i <= 4; i++) {
  setTimeout(() => {
    console.log(i); // ❌ Output:
  }, 1000);
}

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // Fix
  }, 1000);
}
