const fs = require("fs");

// Tutors solution: total= 0.45ms; Q1= 0.343; Q2= 1.284;

console.time("total");

function question1() {
  fs.readFile("./adventOfCode.txt", (err, data) => {
    console.time("advent of code challenge 1");

    const dirc = data.toString();
    const dirArr = dirc.split("");
    const answer = dirArr.reduce((acc, cV) => {
      if (cV === "(") {
        return (acc += 1);
      } else if (cV === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("advent of code challenge 1");
    console.log(answer);
  });
}
question1();

function question2() {
  fs.readFile("./adventOfCode.txt", (err, data) => {
    console.time("advent of code challenge 2");

    const dirc = data.toString(),
      dirArr = dirc.split("");
    let acc = 0;
    let counter = 0;
    const answer = dirArr.some(cV => {
      if (cV === "(") {
        acc += 1;
      } else if (cV === ")") {
        acc -= 1;
      }
      counter++;
      return acc < 0;
    });
    console.timeEnd("advent of code challenge 2");
    console.log(counter);
  });
}
question2();
console.timeEnd("total");
