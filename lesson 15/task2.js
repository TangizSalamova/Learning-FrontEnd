// [[4,3,2],[2,4,6,8],[3,4,9]] -> 3+3=9=18/3  arrayin daxilindeki ededlerden hansi tekdirse onlari tapib , ededleri ortasin tapan app yazin.

var array = [[4,3,2],[2,4,6,8],[3,4,9]];

var prime = (arr) => arr.map((element) => element.filter((element) => element % 2 !== 0))


console.log(prime(array));