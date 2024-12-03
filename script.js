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

// Merge Sort
function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let arrFinal = [];
  let arr1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let arr2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] <= arr2[0] || arr2.length === 0) {
      arrFinal.push(arr1.shift());
    } else {
      arrFinal.push(arr2.shift());
    }
  }

  return arrFinal;
}

// Testing
console.log('Loop:');
console.log(`fibs(0) => [${fibs(0)}]`);
console.log(`fibs(1) => [${fibs(1)}]`);
console.log(`fibs(2) => [${fibs(2)}]`);
console.log(`fibs(8) => [${fibs(8)}]`);
console.log();
console.log('Recursive:');
console.log(`fibsRec(0) => [${fibsRec(0)}]`);
console.log(`fibsRec(1) => [${fibsRec(1)}]`);
console.log(`fibsRec(2) => [${fibsRec(2)}]`);
console.log(`fibsRec(8) => [${fibsRec(8)}]`);
console.log();
console.log('Merge Sort:');
console.log(
  `mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) => [${mergeSort([
    3, 2, 1, 13, 8, 5, 0, 1,
  ])}]`
);
console.log(
  `mergeSort([105, 79, 100, 110]) => [${mergeSort([105, 79, 100, 110])}]`
);
console.log(
  `mergeSort([34, -2, 9, 0, 32, 7, 8, -25]) => [${mergeSort([
    34, -2, 9, 0, 32, 7, 8, -25,
  ])}]`
);
