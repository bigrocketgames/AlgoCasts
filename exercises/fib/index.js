// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  // my recursive solution
    if (n < 2) {
      return n
    } else {
      return fib(n-2) + fib(n-1)
    }

  // my iterative solution
    // fibArr = [];
    // for (let i = 0; i <= n; i++) {
    //   if (i < 2) {
    //     fibArr.push(i)
    //   } else {
    //     fibArr.push(fibArr[i-2] + fibArr[i-1])
    //   }
    // }

    // return fibArr[fibArr.length - 1]

}

fib = memoize(fib);

module.exports = fib;
