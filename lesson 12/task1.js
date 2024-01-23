// var arr = [122,2132,123,23];

// var countNumber = (array) => {
//     var num = 0;
//     var result = [];

//     for(let i = 0; i < array.length; i++){
//        num =(array[i] + '').length;
//        if(Number(num) % 2 == 0) {
//          result.push(array[i]);
//        }
//     }

//     return result;

// }

// console.log(countNumber(arr));

var arr = [122,2132,123,23];

var number = (num) => {
  var count = 0;
  while(num > 0) {
    num = parseInt(num /10);
    count+=1;
  }

  return count % 2 == 0;
}

var countNumber = (array) => {
  var resultArr = [];
  for(var i of array){
    if(number(i)) {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(countNumber(arr));