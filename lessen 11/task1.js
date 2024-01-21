// *
// **
// ***
// ****
// *****
// Formaya uygun algoritmani qur 

var star = '';

var data = () => {
    for(let i = 0; i < 5; i++ ){
        for(let j = 0; j <= i; j++ ){
            star = star + '*';

        }
    star += "\n";
    }   

    return star;
}

console.log(data());
