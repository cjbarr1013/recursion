// Loop
function fibs(n) {
  let f = [0, 1];

  if (n <= 0) {
    return [];
  } else if (n <= 2) {
    return f.slice(0, n);
  }

  for (let i = 2; i < n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

// Recursive
function fibsRec(n, i = 0, f = []) {
  if (n <= i) {
    return f;
  }

  if (i === 0) {
    f.push(0);
  } else if (i === 1) {
    f.push(1);
  } else {
    f.push(f[i - 1] + f[i - 2]);
  }

  return fibsRec(n, i + 1, f);
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
