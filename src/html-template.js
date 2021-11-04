/**
 * Called to create an employee; use a string of 
 * if(uniqueEmployeeQuality) to add the unique qualities;
 * should fail until you reach the one that exists, or you
 * could use typeof == employeeType to pick one of three
 * routes (first seems preferable since getRole exists)
 */
function createEmployeeCard(employeeArr) {
    let retVal = ``;

    employeeArr.forEach(employee => {
        retVal += `<div class="card col-3 bg-primary m-3 shadows">
        <div class="card-body">
            <h5 class="card-title  text-white">${employee.getName()}</h5>
            <p class="card-text  text-white">${employee.getRole()}</p>
            <ul class="list-group list-group-flush text-black">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                </li>
                
                ${addUniqueItem(employee)}
            </ul>
        </div>
    </div>\n\t`
    });

    return retVal;
}

function addUniqueItem(employee) {
    switch (employee.getRole()) {
        case "Intern":
            return `<li class="list-group-item">
                School: ${employee.getSchool()}
            </li>`;
        case "Engineer":
            return `<li class="list-group-item">
                Github: <a href="https://www.github.com/${employee.getGithub()}">www.github.com/${employee.getGithub()}</a>
            </li>`;
        case "Manager":
            return `<li class="list-group-item">
                Office number: ${employee.getOfficeNumber()}
            </li>`;
        default:
            break;
    }
    return "";
}

/**
 * should receive an array of employee objects
 * and call createEmployeeCard to create them
 * one by one
 */
module.exports = (employeeObjectArray) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Team Profile Generator</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="./style.css" />
</head>

<body>
	<header>My Team</header>

	<main class="row m-5 justify-content-center">
    ${createEmployeeCard(employeeObjectArray)}

	</main>

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</body>

</html>`;
}