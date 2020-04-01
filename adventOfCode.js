const fs = require("fs");

// my solution: total= 0.44ms; Q1= 0.472; Q2= 0.151ms;

console.time("total");

fs.readFile("./adventOfCode.txt", (err, data) => {
  console.time("advent of code challenge 1");
  let openBrackets = 0,
    closeBrackets = 0;

  if (err) console.log("error!!!");
  else {
    const txt = data.toString();

    for (var i = 0; i < txt.length; i++) {
      txt.charAt(i) === "(" ? (openBrackets += 1) : (closeBrackets += 1);
    }
  }

  console.timeEnd("advent of code challenge 1");
  console.log(openBrackets - closeBrackets);
});

fs.readFile("./adventOfCode.txt", (err, data) => {
  console.time("advent of code challenge 2");
  let openBrackets = 0;

  if (err) console.log("error!!!");
  else {
    const txt = data.toString();
    for (var i = 0; i < txt.length; i++) {
      txt.charAt(i) === "(" ? (openBrackets += 1) : (openBrackets -= 1);
      if (openBrackets === -1) {
        console.timeEnd("advent of code challenge 2");
        return console.log(i + 1);
      }
    }
  }

  // console.log();
});
console.timeEnd("total");
