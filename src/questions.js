const mysql = require('mysql2');
const {departmentList, roleList, employeeList} = require('./../models');
const db = require('./../db/connection');

const selectedEmployee = {  //tracks selected employee for employee updates
    id: -1,
    name: '',
};

const getSelectedEmployee = () => { //returns the selected employee
    return selectedEmployee;
}

const updateSelectedEmployee = (input) => { //updates the employee selected for an update, also changes update message for manager
    selectedEmployee.id = input.id;
    selectedEmployee.name = input.name;
    updateManagerQuestion[0].message = `Select employee to designate as ${selectedEmployee.name}'s manager`;
}

const listEmployees = () => {   //list all employees
    const output = [];
    for(let i=0; i<employeeList.length; i++) {
        const employee = {
            name: employeeList[i].getFirstName() + ' ' + employeeList[i].getLastName(),
            value: {id: employeeList[i].getID(), name: employeeList[i].getFirstName()}
        }
        output.push(employee);
    }
    return output;
}

const listEmployeesNone = () => {   //list all employees and none option
    const output = [];
    for(let i=0; i<employeeList.length; i++) {
        const employee = {
            name: employeeList[i].getFirstName() + ' ' + employeeList[i].getLastName(),
            value: employeeList[i].getID()
        }
        output.push(employee);
    }
    output.push({name: 'none', value: -1});
    return output;
}

const listEmployeesExceptSelf = () => { //list all employees except selected one
    const output = [];
    for(let i=0; i<employeeList.length; i++) {
        if(employeeList[i].getID() !== selectedEmployee.id) {
            const employee = {
                name: employeeList[i].getFirstName() + ' ' + employeeList[i].getLastName(),
                value: employeeList[i].getID()
            }
            output.push(employee);
        }
    }
    output.push({name: 'none', value: -1});
    return output;
}

const listRoles = () => {   //lists all roles
    const output = [];
    for(let i=0; i<roleList.length; i++) {
        const role = {
            name: roleList[i].getTitle(),
            value: roleList[i].getID()
        }
        output.push(role);
    }
    return output;
}

const listDepartments = () => {
    const output = [];
    for(let i=0; i<departmentList.length; i++) {
        const department = {
            name: departmentList[i].getName(),
            value: departmentList[i].getID()
        }
        output.push(department);
    }
    return output;
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
        choices: listDepartments,
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
        name: "employee_id",
        type: "list",
        choices: listEmployees,
    }
];

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
    getSelectedEmployee,
    updateSelectedEmployee,
};