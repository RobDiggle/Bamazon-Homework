var mysql = require("mysql");
var inquirer = require('inquirer');
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
    if (!!err) {
        console.log("Not connected.");

    }
});

var queryString = 'SELECT * FROM Products';



// app.get('/', function(request, response)
// {
//   console.log("SELECT id, product_name FROM Products")
// });

// app.listen(3306)

inquirer.prompt([{
    type: 'list',
    name: 'userResponse1',
    message: 'Welcome to the Bamazon store, would you like to see what products we have for sale?',
    choices: [
        "Yes",
        "Nah"
    ]
}]).then(function(userResponse1) {
    if (userResponse1.userResponse1 === "Yes") {
        console.log("These are the products available for sale:   ");
        // Display the "Products" table column "product_name"
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;

            for (var i in rows) {
                console.log('ID #: ', rows[i].id, 'Product: ', rows[i].product_name, 'Cost in dollars: ', rows[i].price);
            }
        });






        inquirer.prompt([{
            type: 'input',
            name: 'userResponse2',
            message: 'What is the ID of the product you would like to buy?',

        }]).then(function(userResponse2) {
            if (userResponse2.userResponse2 <= 10) {
                var queryString = 'SELECT * FROM Products';

                connection.query(queryString, function(err, rows, fields) {

                    console.log("You've selected id # " + userResponse2.userResponse2 + " which corresponds to this product: " + rows[userResponse2.userResponse2].product_name);
                    // Display the next inquirer prompt asking for quantity.

                });
                inquirer.prompt([{
                    type: 'input',
                    name: 'userResponse3',
                    message: "How many units of the product would you like to buy?",
                }]).then(function(userResponse3) {
                    if (userResponse3.userResponse3 < 1000) {
                            var queryString = 'SELECT * FROM Products';

                            connection.query(queryString, function(err, rows, fields) {
                        if (userResponse3.userResponse3 <= rows[userResponse2.userResponse2].stock_quantity) {

                                console.log("You have bought " + userResponse3.userResponse3 + " of " + rows[userResponse2.userResponse2].product_name);
                                console.log("Total cost in dollars: " + (userResponse2.userResponse2 * rows[userResponse3.userResponse3].price))
                            
                          }
                     else 
                     {
                        console.log("We don't have enough of that product in our stock.")
                    }




                        })
                        };
                    





                    connection.end();

                })



                // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

                // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
                // However, if your store does have enough of the product, you should fulfill the customer's order.

                // This means updating the SQL database to reflect the remaining quantity.
                // Once the update goes through, show the customer the total cost of their purchase.








            } else if (userResponse2.userResponse2 === "Nah") {
                console.log("Not dialed in")
            }
        })





    } else if (userResponse1.userResponse1 === "Nah") {
        console.log("Not dialed in")
    }
})
