const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

const { Department, Role, Employee, departmentList, roleList, employeeList } = require('./models');
const questions = require('./src/questions');

const viewAllDepartments = () => {
    db.query(`SELECT id, name
              FROM department`, (err, res) => {
        if(err) {
            console.error(err);
        } else {
            console.table(res);
        }
        main();
    });
}

const viewAllRoles = () => {
    db.query(`SELECT role.id, title, name AS 'department', salary
                FROM department, role
                WHERE department_id = department.id`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            console.table(res);
        }
        main();
    });
}

const viewAllEmployees = () => {
    db.query(`SELECT  employee.id, CONCAT(first_name, ' ', last_name) AS name, title, name AS department, salary, (SELECT CONCAT(first_name, ' ', last_name) FROM employee AS managers WHERE employee.manager_id = managers.id) AS manager
                FROM    employee, department, role
                WHERE   employee.role_id = role.id AND role.department_id = department.id;`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            console.table(res);
        }
        main();
    });
}

const addDepartment = (department) => {
    inquirer.prompt()
}

const addRole = (role) => {

}

const addEmployee = (employee) => {

}

const updateEmployee = () => {
    inquirer.prompt(questions.updateEmployeeQuestions).then((ans) => {
        console.log(ans);
        questions.updateSelectedEmployee(ans.employee);
        //update query
        askUpdateManager();
    });
}

const updateEmployeeManager = () => {
    inquirer.prompt(questions.updateManagerQuestion).then((ans) => {
        console.log(ans);
        main();
    });
}

const askUpdateManager = () => {
    const question = [
        {
            message: "Update manager?",
            name: "choice",
            type: "list",
            choices: [
                'yes',
                'no',
            ]
        }
    ];
    inquirer.prompt(question).then((ans) => {
        if(ans.choice === 'yes') {
            updateEmployeeManager();
        } else {
            main();
        }
    })
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

const main = () => {
    inquirer.prompt(questions.mainOptions).then((ans) => {
        let input = ans.input;
        if(input === "view all departments") {
            viewAllDepartments();
        } else if(input === "view all roles") {
            viewAllRoles();
        } else if(input === "view all employees") {
            viewAllEmployees();
        } else if (input === "add a department") {
            addDepartment();
        } else if (input === "add a role") {
            addRole();
        } else if (input === "add an employee") {
            addEmployee();
        } else if (input === "update an employee") {
            updateEmployee();
        } else if (input === "view employees by manager") { //here down is optional to do

        } else if (input === "view employees by department") {

        } else if (input === "delete department") {

        } else if (input === "delete role") {

        } else if (input === "delete employee") {

        } else if (input === "view total utilized budget of a department") {

        } else if (input === "DONE") {
            process.exit(1);
        }
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        } else {
            console.error(error);
        }
    });
}

const initialize = () => {
    db.query(`SELECT * FROM department`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            //console.log(res[0]);
            for(let i=0; i<res.length; i++) {
                const department = new Department(res[i].id, res[i].name);
                departmentList.push(department);
            }
            //console.log(departmentList);
        }
    });

    db.query(`SELECT * FROM role`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            //console.log(res[0]);
            for(let i=0; i<res.length; i++) {
                const role = new Role(res[i].id, res[i].title, res[i].salary, res[i].deparment_id);
                roleList.push(role);
            }
            //console.log(roleList);
        }
    });

    db.query(`SELECT * FROM employee`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            //console.log(res[0]);
            for(let i=0; i<res.length; i++) {
                const employee = new Employee(res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id);
                employeeList.push(employee);
            }
            //console.log(employeeList);
        }
    });
    main();
}

initialize();
//main();