var mysql = require("mysql");
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "kharms1337",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err)
  {
  	console.log("Error occurred.")
  }
  else
  {
 	 console.log("Succesful connection with id " + connection.threadId);
  }
});

inquirer.prompt([
  {
    type: 'list',
    name: 'userResponse',
    message: 'Choose a method of inquiry.',
    choices: [
      'Search by artist name.',
      'Search by artist that occur more than once.'
    ]
  }
]).then(function(userResponse) {
		console.log(userResponse)
  	if (userResponse.userResponse === 'Search by artist name.')
  			{
  				console.log("Dialed in")
  			}
	else if (userResponse.userResponse === 'Search by artist that occur more than once.')
			{
				console.log("Not dialed in")
			}})