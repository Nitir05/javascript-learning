const myObj = {
  js: "Javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  // console.log(`${key} shortcut is ${myObj[key]}`);
}

const programming = ["JS", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(`${key} shortcut is ${programming[key]}`);
}
