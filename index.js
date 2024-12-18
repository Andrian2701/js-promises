// new Promise((res) => setTimeout(() => res("Appeared after 1s"), 1000)).then(
//   console.log
// );

// new Promise((res, rej) =>
//   setTimeout(() => rej("Error appeared after 2s"), 1000)
// ).catch(console.log);

// // Create three promises that resolve after different times
// const fastPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Fast promise resolved");
//   }, 1000);
// });

// const mediumPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Medium promise resolved");
//   }, 2000);
// });

// const slowPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Slow promise resolved");
//   }, 3000);
// });

// // Use Promise.race to return the first resolved promise
// Promise.race([fastPromise, mediumPromise, slowPromise])
//   .then((message) => {
//     console.log("First resolved promise:", message);
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   });

// Example of a callback-based function
function getData(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}

// Promisify the callback-based function
function getDataPromise() {
  return new Promise((resolve, reject) => {
    getData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Use the promisified function
getDataPromise()
  .then((data) => {
    console.log("Promise resolved with:", data);
  })
  .catch((error) => {
    console.error("Promise rejected with:", error);
  });
