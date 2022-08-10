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
    inquirer.prompt(questions.addDepartmentQuestion).then((ans) => {
        const name = ans.name;
        db.query(`INSERT INTO department (name) VALUES ('${name}')`,(err,res) => {
            if(err) {
                console.error(err);
            } else {
                console.log(res);
                const department = new Department(res.insertId, name);
                departmentList.push(department);
                main();
            }
        });
    });
}

const addRole = (role) => {
    inquirer.prompt(questions.addRoleQuestions).then((ans) => {
        const title = ans.title;
        const salary = ans.salary;
        const department = ans.department;
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department})`,(err,res) => {
            if(err) {
                console.error(err);
            } else {
                const role = new Role(res.insertId, title, salary, department);
                roleList.push(role);
                main();
            }
        });
    });
}

const addEmployee = (employee) => {
    inquirer.prompt(questions.addEmployeeQuestions).then((ans) => {
        const first_name = ans.first_name;
        const last_name = ans.last_name;
        const role = ans.role;
        const manager = ans.manager;
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role}, ${manager})`,(err,res) => {
            if(err) {
                console.error(err);
            } else {
                const employee = new Employee(res.insertId, first_name, last_name, role, manager);
                employeeList.push(employee);
                main();
            }
        });
    });
}

const updateEmployee = () => {
    inquirer.prompt(questions.updateEmployeeQuestions).then((ans) => {
        questions.updateSelectedEmployee(ans.employee);
        const firstName = (ans.first_name === '') ? '' : ` first_name = ${ans.first_name},`;
        const lastName = (ans.last_name === '') ? '' : ` last_name = ${ans.last_name},`;
        const role = ` role_id = ${ans.role}`;
        db.query(`UPDATE employee SET${firstName}${lastName}${role} WHERE id=${ans.employee.id}`, (err,res) => {
            if(err) {
                console.error(err);
            } else {
                askUpdateManager();
            }
        });
    });
}

const updateEmployeeManager = () => {
    inquirer.prompt(questions.updateManagerQuestion).then((ans) => {
        const manager_id = (ans.manager_id === -1) ? 'NULL' : ans.manager_id;
        const id = questions.getSelectedEmployee().id;
        db.query(`UPDATE employee SET manager_id = ${manager_id} WHERE id = ${id}`, (err,res) => {
            if(err) {
                console.error(err);
            } else {
                main();
            }
        });
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
            viewAllDepartments();   //done
        } else if(input === "view all roles") {
            viewAllRoles();         //done
        } else if(input === "view all employees") {
            viewAllEmployees();     //done
        } else if (input === "add a department") {
            addDepartment();        //done
        } else if (input === "add a role") {
            addRole();              //done
        } else if (input === "add an employee") {
            addEmployee();          //done
        } else if (input === "update an employee") {
            updateEmployee();       //done
        } else if (input === "view employees by manager") {

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