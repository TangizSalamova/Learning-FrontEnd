// [8,6,4,3,4] --> [2,2,1,3,4]

var array = [8,6,4,3,4];
var newArr = [];

var checkArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                arr[i] = arr[i] - arr[j];
                break;
            }
        }
    }

    return arr;
}

console.log(checkArr(array));