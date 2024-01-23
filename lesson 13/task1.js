// input 231 --> output 132 

var reverseNum = (number) => {
    var sum = '';

    while (number > 0) {
        sum += number % 10
        number = parseInt(number / 10);
        // number = number % 10;



    }

    return sum;
}

console.log(reverseNum(231));

