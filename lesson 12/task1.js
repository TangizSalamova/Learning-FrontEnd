var arr = [122,2132,123,23];

var countNumber = (array) => {
    var num = 0;
    var result = [];

    for(let i = 0; i < array.length; i++){
       num =(array[i] + '').length;
       if(Number(num) % 2 == 0) {
         result.push(array[i]);
       }
    }

    return result;

}

console.log(countNumber(arr));
