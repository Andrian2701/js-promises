fetch("https://www.google.com").then(() => console.log(1));

Promise.resolve().then(() => console.log(2));

Promise.reject().catch(() => console.log(3));

//2, 3, 1
