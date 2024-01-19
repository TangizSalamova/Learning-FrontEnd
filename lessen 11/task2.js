// verilen sozdeki x ve y sayini tap 
// tapilan say 2ye tam bolunurmu? 

x = 0;
y = 0;

var herf = (word) => {

    for(let i = 0; i < word.length; i++){
        if(word[i] == "x"){
            x +=1;
        } else if(word[i] == "y"){
            y+=1
        }
    }

    return [x,y];
} 

var dataXY = (x,y) => {
    if(x % 2 == 0 && y % 2 == 0) {
        return true;
    } else {
        return false;
    }
}