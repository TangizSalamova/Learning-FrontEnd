// [2,3,5,6] -> 3+5/2 

var array = [2,3,5,6];

var numbers = (arr) => arr.filter((element) => element % 2 == 0).reduce((sum, element) => (sum + element)/2,0);

console.log(numbers(array));