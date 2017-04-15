var mysql = require("mysql");
var inquirer = require ('inquirer');
// var express =  require("express");
// var app = express();

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
  if (!!err)
  {
    console.log("Not connected.");

  }
  else
  {
    console.log("Connected")
  }
});

var queryString = 'SELECT * FROM Products';
 


// app.get('/', function(request, response)
// {
//   console.log("SELECT id, product_name FROM Products")
// });

// app.listen(3306)

inquirer.prompt([
  {
    type: 'list',
    name: 'userResponse1',
    message: 'Welcome to the Bamazon store, would you like to see what products we have for sale?',
    choices: [
    "Yes",
    "Nah"
    ]
  }
]).then(function(userResponse1) {
    if (userResponse1.userResponse1 === "Yes")
        {
          console.log("These are the products available for sale:   ");
          // Display the "Products" table column "product_name"
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('Product: ', rows[i].product_name, 'ID #: ', rows[i].id);
    }
});
 
connection.end();





inquirer.prompt([
  {
    type: 'input',
    name: 'userResponse2',
    message:'What is the ID of the product you would like to buy?',

  }
]).then(function(userResponse2) {
    if (userResponse2.userResponse2 === "Yes")
        {
          console.log("Dialed in times 2");
          // Display the next inquirer prompt asking for quantity.


inquirer.prompt([
  {
    type: 'input',
    name: 'userResponse3',
    message: "How many units of the product would you like to buy?",
  }
]).then(function(userResponse3) {
    if (userResponse3.userResponse3 < 1000)
        {
          console.log("Dialed in times 3")
        }


})












        }
  else if (userResponse2.userResponse2 === "Nah")
      {
        console.log("Not dialed in")
      }})





        }
  else if (userResponse1.userResponse1 === "Nah")
      {
        console.log("Not dialed in")
      }})