// array = [21, 140, -123, -340];->[ 12, 41, -321, -43 ]

var array = [21, 140, -123, -340];

var reverseArray = (arr) => arr.map((element) => element.toString().split('').reverse() )


console.log(reverseArray(array));