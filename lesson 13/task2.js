// ”       Salam    necesen        ishler nece          gedir       “   ←-----   metnini
// “Salam necesen ishler nece gedir” ←--------      halina getirin.

var soz = '       Salam    necesen        ishler nece          gedir       '

var wordTrim = (word) => {
    var result = '';
   for(var i = 0; i < word.length; i++){
    if(word[i] !== ' '){
        result = result + word[i];
    }

   }

   return result;
}

console.log(wordTrim(soz));

