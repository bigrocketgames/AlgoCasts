const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 39', () => {
  expect(fib(39)).toEqual(63245986);
});

test('calculates correct fib value for 45', () => {
  expect(fib(45)).toEqual(1134903170);
});

test('calculates correct fib value for 47', () => {
  expect(fib(47)).toEqual(2971215073);
})

test('calculates correct fib value for 50', () => {
  expect(fib(50)).toEqual(12586269025);
});

test('calculates correct fib value for 90', () => {
  expect(fib(90)).toEqual(2880067194370816120);
});
