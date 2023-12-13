/********************************* Polyfill for Bind Method ****************************************************/
//Polyfill: It is a browser fallback, if your browser does not have or support some methods (e.g bind), then we write our own implementation of it

let name = {
  firstName: "Nitin",
  lastName: "Rahangdale",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name);
// printMyName();

//Our polyfill for bind

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Tirora");
printMyName2("maharashtra", "India");
