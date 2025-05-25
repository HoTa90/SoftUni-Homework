function multiply(a?: string | number, b?: string | number, c?: string | number): number {
  let sum = 1;
  if (a) {
    if (typeof a === 'string') {
      a = Number(a);
    }
    sum *= a;
  }
  if (b) {
    if (typeof b === 'string') {
      b = Number(b);
    }
    sum *= b;
  }

  if (c) {
    if (typeof c === 'string') {
      c = Number(c);
    }
    sum *= c;
  }
  return sum;
}

console.log(multiply('3', 5, '10'));
console.log(multiply('2', '2'));
console.log(multiply(undefined, 2, 3));
console.log(multiply(7, undefined, '2'));
console.log(multiply());
