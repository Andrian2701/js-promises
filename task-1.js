console.log(1);

// const promise = new Promise((res, rej) => console.log(3));
const promise = new Promise((res, rej) => res(3)).then(console.log);

console.log(2);
