// for of

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  // console.log(i);
}

const greetings = "Hello World";
for (const greet of greetings) {
  // console.log(`Each char: ${greet}`);
}

//Map
const map = new Map();
map.set("IN", "India");
map.set("UN", "United States of America");
// console.log(map); //Unique values only

for (const [key, value] of map) {
  // console.log(key, " ", value);
}

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const obj of myObj) {
//   console.log(obj);
// } //cannot iterate objetcs
