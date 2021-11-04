const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generate = require("./src/html-template");
var employees = [];
const questions = [
	{
		type: "list",
		name: "role",
		message: "Which kind of employee would you like to create?",
		choices: ["Employee", "Intern", "Engineer", "Manager"]
	},
	{
		type: "input",
		name: "name",
		message: "What is the employee's name?",
		validate: entry => {
			if (entry) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "id",
		message: "What is the employee's ID?",
		validate: entry => {
			if (entry && parseInt(entry)) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "email",
		message: "What is the employee's email?",
		validate: entry => {
			if (entry) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "school",
		message: "What is the employee's school's name?",
		when: answers => {
			return (answers.role == "Intern");
		},
		validate: entry => {
			if (entry) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "github",
		message: "What is the employee's github account name?",
		when: answers => {
			return (answers.role == "Engineer");
		},
		validate: entry => {
			if (entry) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "officeNumber",
		message: "What is the employee's office number?",
		when: answers => {
			return (answers.role == "Manager");
		},
		validate: entry => {
			if (entry && parseInt(entry)) {
				return true;
			}
			else {
				console.log("\nINVALID ENTRY");
				return false;
			}
		}
	},
	{
		type: "confirm",
		name: "addAnother",
		message: "Would you like to add another employee?",
	},
];

/**
 * Will use inquirer to get an answer,
 * call createEmployee to create an object
 * and push it to the employees array, and
 * then use the "go again?" question that was
 * asked to decide whether to call itself again
 */
async function getInput() {
	return await inquirer.prompt(questions);
}

/**
 * will create an employee object based on
 * an inquirer answer, which are just objects
 * with key/value pairs based on the names
 * of the questions asked via inquirer
 */
function createEmployee(traits) {
	let newEmployee = "error";

	if (traits.role == "Employee") {
		newEmployee = new Employee(traits.name, traits.id, traits.email);
	}
	else if (traits.role == "Intern") {
		newEmployee = new Intern(traits.name, traits.id, traits.email, traits.school);
	}
	else if (traits.role == "Engineer") {
		newEmployee = new Engineer(traits.name, traits.id, traits.email, traits.github);
	}
	else if (traits.role == "Manager") {
		newEmployee = new Manager(traits.name, traits.id, traits.email, traits.officeNumber);
	}

	return newEmployee;
}

/**
 * Will call using generate(employees) to get a return of
 * HTML code to write to a file in dist using fs
 */
function writeHTML(employeeArr) {
	const html = generate(employeeArr);
	fs.writeFile("./dist/portfolio.html", html, err => {
		if (err) {
			throw err;
		}
		console.log("File created!");
	});
	return "string containing HTML, test to see if string returned";
}

async function start() {
	let answers = await getInput();
	employees.push(createEmployee(answers));

	while (answers.addAnother) {
		answers = await getInput();
		employees.push(createEmployee(answers));
	}

	writeHTML(employees);
}

start();

module.exports = { getInput, createEmployee, writeHTML };