// "xyuixpy" x-2, y-2 -> true

var soz = "xxyuixpy";

var result = (alma) => {
    var array = alma.split('')
    var x = array.filter((element) => element === 'x').reduce((count,element) => count + 1, 0);
    var y = array.filter((element) => element ==='y').reduce((count,element) => count + 1,0);

    if((x + y)%2==0){
        return true;
    }else{
        return false;
    }
};

console.log(result(soz));
