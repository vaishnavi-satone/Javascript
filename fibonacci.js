function fib(n) {

  const result = [0, 1];
  for (var i = 2; i <= n; i++) {
    const a = (i - 1);
    const b = (i - 2);
    result.push(a + b);
  }
  console.log(result);
  return result[n];

}

console.log(fib(7));
