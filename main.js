#! /usr/bin/env node
// project Quiz System
// The app will show the students multiple choice questions and prompt the user to reply
// In the end it will show the students the result of the Quiz.
import inquirer from "inquirer";
console.log("Welcome to my Quizz Game:");
console.log("You are required to gain maximum 4 points for the window.");
let points = 0;
//Question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "Typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect Answer");
}
// Question 2
let question2 = await inquirer.prompt([
    {
        name: "Two",
        message: "Who is the Founder of Facebook?",
        type: "list",
        choices: ["Mark Zuckerberg", "Eduardo", "Andew", "Elon Musk"]
    }
]);
if (question2.Two == "Mark Zuckerberg") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect Answer");
}
// Question 4
let question4 = await inquirer.prompt([
    {
        name: "Four",
        message: "who invented Instagram?",
        type: "list",
        choices: ["Kevin Systrom", "Bill Gates", "Andew", "Elon Musk"]
    }
]);
if (question4.Four == "Kevin Systrom") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect Answer");
}
// Question 5
let question5 = await inquirer.prompt([
    {
        name: "Five",
        message: "who invented Computer?",
        type: "list",
        choices: ["Kevin Systrom", "Bill Gates", "Charles Babbage", "Elon Musk"]
    }
]);
if (question5.Five == "Charles Babbage") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect Answer");
}
//Output condition
if (points >= 4) {
    console.log("Congratulations!");
    console.log(`your points: ${points}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your points: ${points}`);
}
