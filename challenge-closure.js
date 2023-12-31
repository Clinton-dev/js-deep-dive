// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

function countDown(originalNumber = 2, step = 1) {
  let count = originalNumber;

  return function () {
    count -= step;
    return count;
  };
}

// const countdown = countDown();
// console.log(countdown());
// console.log(countdown());
// console.log(countdown());

/*
  1. Counter with Private Variable:
Create a function called counter that returns an object with two methods:
increment and decrement. The increment method should increase a private variable
by one, while the decrement method should decrease it by one. The private variable should not be accessible from outside the function.
*/

function counter(intialCount = 0) {
  let count = intialCount;
  const actions = {
    increment(byFactor = 1) {
      count += byFactor;
      return count;
    },
    decrement(byFactor = 1) {
      count -= byFactor;
      return count;
    },
  };

  return actions;
}

/* const count = counter((initialCount = 2));
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement(2)); */



