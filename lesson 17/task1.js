const array = [
  [23, 4, 32, 12],
  [23, 12, 45, 67],
  [12, 34, 121],
];

// 1. 2 ci max
// 2. elementleri tersine cevir.
// 3. murekkeblerin cixardirsiniz.
// 4. min vereceksiniz

//   1. 2ci max

var maxNumber = (...arr) => Math.max(...arr.map((e) => Math.max(...e)));

console.log(maxNumber(...array));

// 2. elementləri tersine cevir

var reverseNumber = (arr) => arr.map((element) => element.reverse());

console.log(reverseNumber(array));

// 3. murekkebleri cixart

var complexNumber = (arr) => arr.map((element) => element.filter((e) => x(e)));

var x = (element) => {
  for (let i = 2; i < element; i++) {
    if (element % i == 0) {
      return element;
    }
  }
};

console.log(complexNumber(array));

// 4. min tap

var minNumber = (...arr) => Math.min(...arr.map((e) => Math.min(...e)));

console.log(minNumber(...array));
