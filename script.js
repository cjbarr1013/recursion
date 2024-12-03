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

let arr = [
  3, 55, 4, 18, 5, 0, 2, 1, 13, 8, 5, 0, 1, 2, 33, 2, 5, 4, 6, 3, 7, 0, 4, 23,
  55, 5, 8, 9, 77, 4, 0, 2, 4, 8, 9, 22, 21, 34,
];
console.log(mergeSort(arr));
