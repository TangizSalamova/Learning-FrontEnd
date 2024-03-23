// 1 task user elave etmek

var users = [
  {
    id: 1,
    name: "Tangiz",
    surname: "Salamova",
    age: 24,
  },
  {
    id: 2,
    name: "Sabina",
    surname: "Zakirova",
    age: 18,
  },
];

// var userCount = prompt("User Sayi daxil edin");

// var addUsersObject = (say) => {
//   for (let i = 0; i < say; i++) {
//     var idd = prompt("id add please");
//     var ad = prompt("name add please");
//     var soyad = prompt("surname add please");
//     var yas = prompt("age add please");
//     var user = {
//       id: idd,
//       name: ad,
//       surname: soyad,
//       age: yas,
//     };
//     users.push(user);
//   }
// };

// addUsersObject(userCount);
// console.log(users);

// 2 task idye gore useri tapaq

// var userId = prompt("id-ni daxil edin");

// var findUser = (id) => {
//   var foundUser = users.find((user) => user.id == id);

//   if (!foundUser) {
//     return {
//       success: false,
//       message: "User not found",
//     };
//   }
//     return {
//       success: true,
//       message: "User Found",
//       data: foundUser,
//     };
//   }
// ;

// console.log(findUser(userId));
// console.log(users);

// 3 task daxil edilen idye gore user silmek

var userId = prompt("id-ni daxil edin");

var deleteUser = (id) => {
  var foundUser = users.find((user) => user.id == id);
  if (!foundUser) {
    return {
      success: false,
      message: "User not found",
    };
  }

  users = users.filter((user) => user.id != id);
  return {
    success: true,
    message: "User Found",
    data: users,
  };
};

console.log(deleteUser(userId));
console.log(users);

// 4 task verilen idye gore update etmek

// var userId = prompt("id-ni daxil edin");

// var updateOneUser = (id, updateUser) => {
//   const findUser = users.findIndex((user) => user.id === userId);
//   if (!findUser) {
//     return {
//       success: false,
//       message: "User not found",
//     };
//   }
//   users[findUser] = { ...users[findUserIndex], ...updateUser };
//   return {
//     message: "User found",
//     succes: true,
//     data: users,
//   };
// };

// console.log(updateOneUser(1, { name: "AAAA" }));
// console.log(users);

// 5 task id daxil edende proqram sonlansin

// var idUser = prompt("id daxil edin")
// var endUsers = (id) =>{
//     return {
//         success: "end",
//         message: "prossess end",
//         data: users,

//     }
// }

// console.log(endUsers(idUser));
// console.log(users);
