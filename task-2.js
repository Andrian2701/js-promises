// const p = new Promise((res, rej) => rej(Error("Error!")))
//   .catch((err) => {
//     console.log(1, err.message);
//   })
//   .catch((err) => console.log(2, err.message));

new Promise((res, rej) => res(true))
  .then(console.log)
  .catch((err) => console.log(2, err.message))
  .finally(() => console.log("executed"));
