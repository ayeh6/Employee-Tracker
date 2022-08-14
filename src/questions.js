const mysql = require('mysql2');
const { listEmployees, listEmployeesNone, listEmployeesExceptSelf, listDepartments, listRoles, listManagers, getSelectedEmployee } = require('./modelLists.js');
const db = require('./../db/connection');

const updateSelectedEmployee = (input) => { //updates the employee selected for an update, also changes update message for manager
    const selectedEmployee = getSelectedEmployee();
    selectedEmployee.id = input.id;
    selectedEmployee.name = input.name;
    updateManagerQuestion[0].message = `Select employee to designate as ${selectedEmployee.name}'s manager`;
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
            "view employees by manager",
            "view employees by department",
            "delete department",
            "delete role",
            "delete employee",
            "view total utilized budget of a department",
            "DONE"
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
        name: "title",
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
        choices: listDepartments
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
        choices: listRoles,
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
    }
];

const updateManagerQuestion = [
    {
        message: `Select employee to designate as this employee's manager`,
        name: 'manager_id',
        type: 'list',
        choices: listEmployeesExceptSelf,
    }
];

const viewManagerEmployeesQuestion = [
    {
        message: "Select a manager to see their employees:",
        name: "manager_id",
        type: "list",
        choices: listManagers,
    }
];

const viewDepartmentEmployeesQuestion = [
    {
        message: "Select which department to view employees:",
        name: "department_id",
        type: "list",
        choices: listDepartments,
    }
];

const deleteDepartmentQuestion = [
    {
        message: "Select department to delete:",
        name: 'department_id',
        type: 'list',
        choices: listDepartments,
    }
];

const deleteRoleQuestion = [
    {
        message: "Select role to delete:",
        name: "role_id",
        type: "list",
        choices: listRoles,
    }
];

const deleteEmployeeQuestion = [
    {
        message: "Select an employee to delete:",
        name: "employee",
        type: "list",
        choices: listEmployees,
    }
];

const viewDepartmentBudgetQuestion = [
    {
        message: "Select department to view total utilized budget",
        name: "department_id",
        type: "list",
        choices: listDepartments,
    }
]

module.exports = {
    mainOptions,
    addDepartmentQuestion,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions,
    updateManagerQuestion,
    deleteDepartmentQuestion,
    deleteRoleQuestion,
    deleteEmployeeQuestion,
    viewManagerEmployeesQuestion,
    viewDepartmentEmployeesQuestion,
    viewDepartmentBudgetQuestion,
    updateSelectedEmployee,
};