/*
2. Cache Function Results:
Write a function called memoize that takes a function as an argument and returns a new function.
The new function should cache the results of the original function based on its input arguments.
If the same set of arguments is passed to the new function again, it should return the cached result instead of executing
the original function.
*/
function memoize(a, b, callBack) {
    let cachedResults = callBack(a, b);
    // return results base on arguments
    return function (x = a, y = b) {
      // check if arguments are the same
      if (a == x && b == y) {
        return cachedResults;
      } else {
        return (cachedResults = callBack(x, y));
      }
    };
  }

  function callBack(a = 1, b = 1) {
    return a + b;
  }

  const intialValue = memoize(5, 5, callBack);
  console.log(intialValue());
  console.log(intialValue(5, 5));
  console.log(intialValue(6, 6));