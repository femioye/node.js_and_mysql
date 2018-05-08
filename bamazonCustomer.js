// Needed to run the installed npm packages
var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

// Connection to the mysql database.
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'bamazon_DB',
});

// Connection between the server and the products data.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
});

// Function to load the products table from the list of items within the database
function itemInventory() {
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'id',
                message: 'What item ID would you like to purchase?\n',
                validate: function (val) {
                    if (!isNaN(val)) {
                        return true;
                    }
                    return false;
                },
            },
            {
                type: 'input',
                name: 'quantity',
                message: 'How many units would like to buy? \n',
                validate: function (val) {
                    if (!isNaN(val)) {
                        return true;
                    }
                    return false;
                },
            },

        ]).then(function (inventory) {
            connection.query('SELECT * FROM products WHERE ?', [{ item_id: inventory.id }], function (err, res) {
                if (err) throw err;
                
                var availableQuantity = res[0].stock_quantity;
                var productPrice = res[0].price;
                var customerPrice = productPrice * inventory.quantity;
                var remainingQuantity = availableQuantity - inventory.quantity;
                
                if (availableQuantity > inventory.quantity) {
                    console.log(`\nYour total purchase price is $${customerPrice}`);
                    console.log('\n<------------------------->\n');
                    console.log('We appreciate your patronage!');
                    console.log('\n<------------------------->\n');
                    connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [remainingQuantity, inventory.id]);
                    connection.query('SELECT * FROM products', function (error, res) {
                    console.log('Items left for next purchase:\n');
                    console.table(res);
                 });
             } else {
                    console.log('\nInsufficient quantity! Check back later.');
           }

                connection.end();
        });
    });
}


// Load the products from database.

function loadProducts() {
    connection.connect(function () {
        connection.query('SELECT * FROM products', function (err, res) {
            if (err) {
                throw err;
            } else {
                console.table(res);
                console.log('\n<----------------------->\n');
                itemInventory();
            }
        });
    });
}
loadProducts();