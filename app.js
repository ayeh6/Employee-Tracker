const mysql = require('mysql2');
const inquirer = require('inquirer');
//const db = require('./db/connection');
const { Department, Role, Employee } = require('./models');
//const questions = require('./src/questions');

const viewAllDepartments = async () => {

}

const viewAllRoles = async () => {

}

const viewAllEmployees = async () => {

}

const addDepartment = async (department) => {

}

const addRole = async (role) => {

}

const addEmployee = async (employee) => {

}

const updateEmployee = async (employee) => {

}

const updateEmployeeManager = async (employee, manager) => {

}

const viewEmployeeByManager = async () => {

}

const viewEmployeesByDepartment = async () => {

}

const deleteDepartment = async (department) => {

}

const deleteRole = async (role) => {

}

const deleteEmployee = async (employee) => {

}

const viewTotalDepartmentBudget = async (department) => {

}

const main = function () {
    /*
    show options:
        view all departments
        view all roles
        view all employees
        add a department
        add a role
        add an employee
        update an employee
        update an employee's manager
        view employees by manager
        view employees by department
        delete department
        delete role
        delete employee
        view total utilized budget of a department
    */
    inquirer.prompt(questions.mainOptions).then((ans) => {
        let input = ans.input;
        if(input === "view all departments") {

        } else if(input === "view all roles") {

        } else if(input === "view all employees") {

        }else if(input === "add a department") {

        }else if(input === "add a role") {

        }else if(input === "add an employee") {

        }else if(input === "update an employee") {

        }else if(input === "update an employee's manager") {

        }else if(input === "view employees by manager") {

        }else if(input === "view employees by department") {

        }else if(input === "delete department") {

        }else if(input === "delete role") {

        }else if(input === "delete employee") {

        }else if(input === "view total utilized budget of a department") {

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

const test = [
    {
        name: "Andrew",
        age: 26,
    },
    {
        name: "Deo",
        age: 28,
    }
]

const testfunction = function() {
    console.log(test[0]);
    test[0].gender = "male";
}

testfunction();
console.log(test[0]);
console.log('done');