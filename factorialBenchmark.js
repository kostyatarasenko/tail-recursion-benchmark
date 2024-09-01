function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function factorialTailRecursion(n, acc = 1) {
  if (n === 1) {
    return acc;
  } else {
    return factorialTailRecursion(n - 1, n * acc);
  }
}

function runRecursionsBenchmark() {
  const n = 1000;
  const iterations = 1000;

  const regularRecursionTimes = [];
  const tailRecursionTimes = [];

  // Alternating calls
  for (let i = 0; i < iterations; i++) {
    let start = performance.now();
    // Benchmark for tail recursion
    start = performance.now();
    factorialTailRecursion(n);
    tailRecursionTimes.push(performance.now() - start);

    // Benchmark for regular recursion
    factorial(n);
    regularRecursionTimes.push(performance.now() - start);
  }

  const regularAvg = regularRecursionTimes.reduce((a, b) => a + b, 0) / regularRecursionTimes.length;
  const tailRecursionAvg = tailRecursionTimes.reduce((a, b) => a + b, 0) / tailRecursionTimes.length;

  console.log(`Regular Factorial Average Time: ${regularAvg.toFixed(4)}ms`);
  console.log(`Tail Recursion Factorial Average Time: ${tailRecursionAvg.toFixed(4)}ms`);
}

runRecursionsBenchmark();
