let name = {
  firstname: "Nitin",
  lastname: "Rahangdale",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      "from " +
      hometown +
      ", " +
      state
  );
};

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

//function borrowing using call method
printFullName.call(name2, "Mumbai", "Maharashtra");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

/* Call and Apply method differs only based on how we pass the arguments */

/**
 * Bind Method
 * return the copy of function
 * does not directly call the function
 * used to keep a copy of method to use it later
 */

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();
