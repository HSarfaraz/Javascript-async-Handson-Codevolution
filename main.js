/*

00:00 Intro
01:22 What, Why and How?
07:10 Timeouts and Intervals
14:48 Callbacks
22:19 Promise
44:44 async & await
55:24 Event Loop
01:27:42 Wrapping Up

*/
//Setimeout

/*
The setTimeout() function executes a perticular block of code once after a specified time has elapsed
*/

// function greet(name) {
//   console.log(`hello ${name}`);
// }

// const timeoutId = setTimeout(greet, 3000, "Sarfaraz");
// clearTimeout(timeoutId);

//setInterval()
//it keep running a task forever so you should clear the interval when appropriate
// const intervalId = setInterval(greet, 2000, "Sarfaraz");
// clearInterval(intervalId);

//Noteworth point
//we can take recursive setTimeout in comparison to setInterval

// setInterval(function run() {
//   console.log("Hello");
// }, 100);

// setTimeout(function run() {
//   console.log("Hello");
//   setTimeout(run, 100);
// }, 100);

//Callbacks
//Function can be returned as value from another function
//function can be passed as an argument to another function is called callback in javascript
//Callback are of 2 types, sync and asnyc

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function greetSarfaraz(greetfn) {
//   const name = "Sarfaraz";
//   greetfn(name);
// }

// greetSarfaraz(greet);

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function higherOrderFn(callback) {
//   const name = "Sarfaraz";
//   callback(name);
// }

// higherOrderFn(greet);

//Promise
//1. promise helps us deal with async code in a far more complex way compared to callbacks
//2. callback hell can be avoided with promises
//3. promises would be in 3 states, pending, fulfilled, rejected states
//4. reject and resolve both are functions, make async call to get the resolve, reject methods

//ways tp create a promise
/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bringing tacos");
  }, 5000);
});


const prmise = new Promise((resolve, reject)=>{
  setTimeout(('Not bringing tacos, food truck not there')=>{
    reject();
  },5000);
})


// promise.then(onFullfillment);
// promise.catch(onRejecttion);

//promise chaining
promise.then(onFullfillment).catch(onRejection);

promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//Promise.allSettled: Here, it will check that all promise is complete, regardless of whether or not one of them is rejected.
promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//Promise.race
//this method returns a promise, if a promise that fullfill or reject asa one of the input promise fullfil or rejects
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

const onFullfillment = (result) => {
  console.log(result);
  console.log("setup table for tacos");
};

const onRejection = (error) => {
  console.log(error);
  console.log("start cooking pasta");
};
*/

//Async Await

function greet() {
  return "Hello";
}
greet();

async function greet() {
  return Promise.resolve("Hello");
}
greet();

async function fetchData() {
  try {
    let user = await fetchCurretUser("/api/user");
  } catch (e) {
    console.log("Error", e);
  }
}
fetchData();

function parellel() {
  Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
}
parellel();
