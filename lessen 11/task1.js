// *
// **
// ***
// ****
// *****
// Formaya uygun algoritmani qur 

var star = '';

var data = () => {
    for(let i = 1; i < 5; i++ ){
        for(let j = 5; j > 0; j-- ){
            star = star + '*';

        }
        
    }

    return star;
}

console.log(data());
