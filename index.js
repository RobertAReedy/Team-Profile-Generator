const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generate = require("./src/html-template");
var employees = [];

/**
 * Will use inquirer to get an answer,
 * call createEmployee to create an object
 * and push it to the employees array, and
 * then use the "go again?" question that was
 * asked to decide whether to call itself again
 */
function getInput() {
    return "the inquirer answer object for tests";
}

/**
 * will create an employee object based on
 * an inquirer answer, which are just objects
 * with key/value pairs based on the names
 * of the questions asked via inquirer
 */
 function createEmployee(traits) {
    return "the employee object for test purposes";
}

/**
 * Will call using generate(employees) to get a return of
 * HTML code to write to a file in dist using fs
 */
function writeHTML() {
    return "string containing HTML, test to see if string returned";
}

function start() {

}

start();