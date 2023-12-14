// *********************************************** OBJECTS ******************************************************* //
//create object using object literals
const mySym = Symbol("key1");
const jsUser = {
  name: "Nitin",
  "full name": "Nitin Rahangdale",
  age: 24,
  location: "Nagpur",
  email: "nitin@microsoft.com",
  isLoggedin: true,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
//IMP: To access symbol always use square annotation

// Object.freeze(jsUser); //Freeze the changes on object
jsUser.email = "test";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello Js User");
};

jsUser.greeting2 = function () {
  console.log(`Hello JS User, ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

// Create Object using Constructor (Singleton)

const tinderUser = new Object();
tinderUser.id = "123";
tinderUser.name = "Johnny Sins";
tinderUser.isLoggedin = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Nitin",
      lastName: "Rahangdale",
    },
  },
};

// console.log(regularUser?.fullname?.userFullName?.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 }; //mostly spread is used
// console.log(obj3);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogged"));

//Object Destructuring
const course = {
  name: "Js in Hindi",
  price: 999,
  instructor: "Nitin Bhai",
};

const {
  name: courseName,
  price: coursePrice,
  instructor: courseInstructor,
} = course;
console.log(courseInstructor);
