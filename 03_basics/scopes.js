// ************************************************* SCOPES ****************************************************** //
//Let and const are block scoped
//Var is global scoped
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(a);
}

// console.log(a); // not defined
// console.log(b); //not defined
// console.log(c); // c will get overwritten

function one() {
  const username = "Nitin";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();

// ++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++ //
addOne(5); //wont trow error as hoisting will take place here

function addOne(num) {
  return num + 1;
}

addTwo(5); //this will throw error as it is being treated as variable
const addTwo = function (num) {
  return num + 2;
};
