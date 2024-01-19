// Promise 1

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am Completed Promise You can Proceed");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("Promise Completed");
// });

// Promise 2

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise 2 working");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise 2 completed");
// });

// Promise 3

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise 3 Working");
//     resolve({ username: "Monis", email: "khanmonis835@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
//   console.log("Promise 3 Completed");
// });

// Promise 4

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       console.log("Promise 4 Running");
//       resolve({ username: "MONIS KHAN", password: "ABCD" });
//     } else {
//       reject("Something Went Wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log("Object", user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log("I am ", username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("I am done");
//   });

// Promise 5 use of async await

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("I am Promise five");
//       resolve({ username: "Monis Khan", password: "1234" });
//     } else {
//       reject("Something Went Wrong with code");
//     }
//   }, 1000);
// });

// async function usePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// usePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
