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
        message: "Select department:",
        name: "department",
        type: "list",
    }
];

module.exports = {mainOptions};