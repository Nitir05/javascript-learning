// *********************************************** FUNCTIONS *************************************************** //

//syntax
function sayMyName() {
  console.log("Nitin");
}

// sayMyName();

//this functions accepts two parameters
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

//console.log(addTwoNumbers(1, 2)); //what we pass to the functions are called arguments

//To send value back from function we use "return" keyword
//No code is executed after return keyword

function loginUserMessage(username = "Nitin") {
  //Passing a default value if no argument as sent
  if (username === undefined) {
    console.log("Please enter a Username");
    return;
  }
  return `${username} just logged In`;
}

// console.log(loginUserMessage("Rahul"));

function calculateCartPrice(...items) {
  return items;
}

// console.log(calculateCartPrice(100, 200, 300));

function restExample(val1, val2, ...items) {
  return items;
}
// console.log(restExample(100, 200, 300, 400, 500));

const user = {
  username: "Nitin",
  price: "200",
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and Price is ${anyObject.price}`
  );
}

// handleObject(user);

const array = [200, 300, 400, 500];

function returnSecondValue(arr) {
  return arr[1];
}

console.log(returnSecondValue(array));
