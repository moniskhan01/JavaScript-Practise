// const user = {
//     username: "monis",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "monis"
//     console.log(this.username);
//     console.log(username);
// }

// chai()

// const chai = function () {
//     let username = "monis"
//     console.log(username);
// }
// chai()
// const chai =  () => {
//     let username = "monis"
//     console.log(username);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Monis"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




//IIFE
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('MONIS')
