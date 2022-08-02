const mysql = require('mysql2');
const db = require('./../db/connection');

const listEmployees = async (ans) => {
    
}

const listEmployeesNone = async (ans) => {
    
}

const listEmployeesExceptSelf = async (ans) => {

}

const listRoles = async (ans) => {

}

const mainOptions = [
    {
        message: "Select an option:",
        name: "input",
        type: "list",
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee",
            "update an employee's manager",
            "view employees by manager",
            "view employees by department",
            "delete department",
            "delete role",
            "delete employee",
            "view total utilized budget of a department"
        ],
    }
];

const addDepartmentQuestion = [
    {
        message: "Enter department name:",
        name: "name",
        type: "input",
    }
];

const addRoleQuestions = [
    {
        message: "Enter title of role:",
        name: "name",
        type: "input",
    },
    {
        message: "Enter salary of role:",
        name: "salary",
        type: "input",
    },
    {
        message: "Select department for role:",
        name: "department",
        type: "list",
        //choices: list of departments
    }
];

const addEmployeeQuestions = [
    {
        message: "Enter first name of employee:",
        name: "first_name",
        type: "input",
    },
    {
        message: "Enter last name of employee:",
        name: "last_name",
        type: "input",
    },
    {
        message: "Select employee's role:",
        name: "role",
        type: "list",
    },
    {
        message: "Select employee's manager:",
        name: "manager",
        type: "list",
        choices: listEmployeesNone,
    }
];

const updateEmployeeQuestions = [
    {
        message: "Select employee to update:",
        name: "employee",
        type: "list",
        choices: listEmployees,
    },
    {
        message: "Enter updated first name (leave blank to skip):",
        name: "first_name",
        type: "input",
    },
    {
        message: "Enter update last name (leave blank to skip):",
        name: "last_name",
        type: "input",
    },
    {
        message: "Select updated role for employee:",
        name: "role",
        type: "list",
        choices: listRoles,
    },
    {
        message: "Select updated manager for employee:",
        name: "manager",
        type: "list",
        chocies: listEmployeesExceptSelf,
    }
]

module.exports = {};