// input 5 output=> 1.-1,2,-2,0 

var numberSplit = (number) => {
    var arr = [];

    if(number % 2 !== 0){
        arr.push(0);
    }

    for(var i = 1; i <= number / 2;i++){
        arr.push(i);
        arr.push(-i);
    }

    return arr;
}

console.log(numberSplit(6));