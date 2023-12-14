// ********************************************** Arrays ******************************************************* //

const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeroes = ["Shaktiman", "naagraj", "doga"];
const myArr2 = new Array(1, 2, 3, 4);
// myArr.push(7);
// myArr2.pop();
// console.log(myArr);

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(6)); //return boolean
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

//slice and splice
// console.log(myArr);
const myNewArr1 = myArr.slice(1, 3);
const myNewArr2 = myArr.splice(1, 3);
// console.log(myNewArr1);
// console.log(myNewArr2);
// console.log(myArr);

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHerores = ["Superman", "Flash", "Batman"];

// marvelHeroes.push(dcHerores);
// console.log(marvelHeroes[3]);

// const allHeroes = marvelHeroes.concat(dcHerores);
// console.log(allHeroes);

const allHeroes = [...marvelHeroes, ...dcHerores];
// console.log(allHeroes);
const anotherArray = [1, 2, 3, [4, 5, 6], 6, 7, [8, 9, [10, 11]]];
const flattenArray = anotherArray.flat(Infinity);
// console.log(flattenArray);

// console.log(Array.from("Nitin"));
console.log(Array.from({ name: "nitin" })); //interesting
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
