// [8,6,4,3,4] --> [2,2,1,3,4]

var arr = [8,6,4,3,4];
var newArr = [];

var checkArr = (arr) => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i] ){
            newArr.push(arr[i-1] - arr[i]);
        }else{
            newArr.push[arr[i-1]];
        }
    }

    return newArr;
}

console.log(checkArr(arr));