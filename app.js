const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');
const { Department, Role, Employee } = require('./models');
const questions = require('./src/questions');

const viewAllDepartments = () => {
    try {
        db.query(`SELECT id, name FROM department`, function(err, res) {
            console.log(res);
        });
    } catch(e) {
        console.log(e);
    }
}

const viewAllRoles = () => {
    try {
        db.query(`SELECT role.id, title, name AS 'department', salary FROM department, role WHERE department_id = department.id`, function(err,res) {
            console.log(res);
        });
    } catch(e) {
        console.log(e);
    }
}

const viewAllEmployees = () => {

}

const addDepartment = (department) => {

}

const addRole = (role) => {

}

const addEmployee = (employee) => {

}

const updateEmployee = (employee) => {

}

const updateEmployeeManager = (employee, manager) => {

}

const viewEmployeeByManager = () => {

}

const viewEmployeesByDepartment = () => {

}

const deleteDepartment = (department) => {

}

const deleteRole = (role) => {

}

const deleteEmployee = (employee) => {

}

const viewTotalDepartmentBudget = (department) => {

}

const main = function () {
    inquirer.prompt(questions.mainOptions).then((ans) => {
        let input = ans.input;
        if(input === "view all departments") {

        } else if(input === "view all roles") {

        } else if(input === "view all employees") {

        } else if (input === "add a department") {

        } else if (input === "add a role") {

        } else if (input === "add an employee") {

        } else if (input === "update an employee") {

        } else if (input === "view employees by manager") {

        } else if (input === "view employees by department") {

        } else if (input === "delete department") {

        } else if (input === "delete role") {

        } else if (input === "delete employee") {

        } else if (input === "view total utilized budget of a department") {

        }
    }).catch((e) => {
        if (e.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        } else {
            console.log(error);
        }
    });
}

// const test = [
//     {
//         name: "Andrew",
//         age: 26,
//     },
//     {
//         name: "Deo",
//         age: 28,
//     }
// ]

// const testfunction = function() {
//     console.log(test[0]);
//     test[0].gender = "male";
// }

// testfunction();
// console.log(test[0]);
// console.log('done');

viewAllDepartments();
viewAllRoles();