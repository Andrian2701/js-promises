console.log(1);

const p = new Promise((res, rej) => {
  console.log(2);
  res(3);
});

p.then((res) => console.log(res));

console.log(4);

// 1 2 4 3
