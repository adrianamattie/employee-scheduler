//Load NPM Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

var employeeRateArr = [];

//json.parse
//Read in the employee rates from the employee-rates.txt file
function readEmployeeRate() {

    fs.readFile("employee-rates.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = JSON.parse(data)
        

        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
employeeRateArr.push(new employeeRate(data[i]).name,data[i].rate);
            }
        }


        data.forEach(element => {
            employeeRateArr.push(element)
            console.log(employeeRateArr)
        });
        // console.log("these are the choices " + data[i]);
    });

}

readEmployeeRate();


// var WORK_SKILLS=[];
// //Read in the works skiill from the work-skills.txt
// function employee(name, skills, rate) {
//     if (!new.target) {
//         return;
//     }
//     this.name = name.toString();
//     this.skills = skills.tostring();
//     //going to pull from object
//     this.rate = employee_rate;

//     // method to print the charater to text file
//     this.printInfo = function () {
//         fs.appendFile("employee-schedule.txt", employee, "utf8", function (err) {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 console.log('you have added new data to your file');
//             }

//         });
//     }
// }

// function manager(name, rate, employees) {
//     if (!new.target) {
//         return;
//     }
//     this.name = name.toString();
//     this.rate = rate;
//     this.employees = employee.split(",");

//     // method to print the charater to text file
//     this.printInfo = function () {
//         fs.appendFile("employee-schedule.txt", manager, "utf8", function (err) {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 console.log('you have added new data to your file');
//             }

//         });
//     }
// }

function employeeRate(name, hourlyRate) {
    if (!new.target) {
        return;
    }
    this.name = name.toString();
    this.hourlyRate = parseFloat(readEmployeeRate());

    // method to print the charater to text file
    this.printInfo = function () {
        fs.appendFile("employee-schedule.txt", employeeRate, "utf8", function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log('you have added new data to your file');
            }

        });
    }
}

// function workskills(name, level) {
//     if (!new.target) {
//         return;
//     }
//     this.name = name.toString();
//     this.level = level.toString();

//     // method to print the charater to text file
//     this.printInfo = function () {
//         fs.appendFile("employee-schedule.txt", workskills "utf8", function (err) {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 console.log('you have added new data to your file');
//             }

//         });
//     }
// }

// function project(name, description, requirements, budget, state_date, end_date, employees, budgetRemaining) {
//     if (!new.target) {
//         return;
//     }
//     this.name = name.toString();
//     this.level = level.toString();

//     // method to print the charater to text file
//     this.printInfo = function () {
//         fs.appendFile("employee-schedule.txt", workskills "utf8", function (err) {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 console.log('you have added new data to your file');
//             }

//         });
//     }
// }
// inquirer.prompt([

//     {
//         type: "list",
//         name: "type",
//         message: "Are you a Manager or an Employee?",
//         choices: ["Manager", "Employee"]
//     },

//     {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//     },

//     {
//         type: "list",
//         name: "rate",
//         message: "What is your hourly rate?",
//         choices: [EMPLOYE_RATES[0].name, EMPLOYE_RATES[1].name]
//     },

//     {
//         type: "checkbox",
//         name: "skills",
//         message: "Please add all skills that apply",
//         choices: [WORKS_SKILLS[0].name,WORK_SKILLS[1].name]
//     },


// ]).then(function (user) {

//     // If the user guesses the password...
//     if (user.myPassword === "myHouse") {

//         console.log("==============================================");
//         console.log("");
//         console.log("Well a deal's a deal " + user.name);
//         console.log("You can stay as long as you like.");
//         console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
//         console.log("");
//         console.log("==============================================");
//     }


//     // If the user doesn't guess the password...
//     else {

//         console.log("==============================================");
//         console.log("");
//         console.log("Sorry " + user.name);
//         console.log("I'm calling the cops!");
//         console.log("");
//         console.log("==============================================");

//     }
// });