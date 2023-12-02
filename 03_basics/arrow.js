const user = {
  userName: "Nitin",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName} welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "Shubham";
// user.welcomeMessage();

// console.log(this);
//this keyword refers to current context

// function chai() {
//   let userName = "Nitin";
//   console.log(this.userName); //"this" does not work in function
// }

// chai();
const chai = () => {
  let username = "Nitin";
  console.log(this);
};

// chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
}; //explicit return

const addThree = (num1, num2, num3) => num1 + num2 + num3; //implicit return

const myArray = [2, 3, 4, 5];
// myArray.forEach(()=>());
