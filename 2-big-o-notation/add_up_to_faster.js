function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.time();
addUpTo(1000000000); // ~0.118ms
console.timeEnd();
