/**
 * Called to create an employee; use a string of 
 * if(uniqueEmployeeQuality) to add the unique qualities;
 * should fail until you reach the one that exists, or you
 * could use typeof == employeeType to pick one of three
 * routes (first seems preferable since getRole exists)
 */
function createEmployeeCard(employeeData) {
    return `html will go here`;
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

		<div class="card col-3 bg-primary m-3 shadows">
			<div class="card-body">
				<h5 class="card-title  text-white">Johnny</h5>
				<p class="card-text  text-white">Violin Player</p>
				<ul class="list-group list-group-flush text-black">
					<li class="list-group-item">ID: 1</li>
					<li class="list-group-item">
						Email: <a href="mailto:wungisbill@gmail.com">wungisbill@gmail.com</a>
					</li>
					<li class="list-group-item">
						Github: <a href="https://www.github.com/bingus">www.github.com/bingus</a>
					</li>
				</ul>
			</div>
		</div>

	</main>

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</body>

</html>`;
}