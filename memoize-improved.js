function memoize(funct) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    } else {
      const result = funct(...args);
      cache[key] = result;
      return result;
    }
  };
}

const callBack = (a = 1, b = 1) => a + b;
const memoizeFunction = memoize(callBack);
console.log(memoizeFunction()); // 2
console.log(memoizeFunction(5, 5)); // 10
console.log(memoizeFunction(6, 6)); // 12
