const db = require('./../db/connection');
const { Department, Role, Employee } = require('./../models');

let departmentList = [];
let roleList = [];
let employeeList = [];
let managerList = [];

const selectedEmployee = {  //tracks selected employee for employee updates
    id: -1,
    name: '',
};

const getSelectedEmployee = () => { //returns the selected employee
    return selectedEmployee;
}

const initialize = () => {
    db.query(`SELECT * FROM department`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const department = new Department(res[i].id, res[i].name);
                departmentList.push(department);
            }
        }
    });

    db.query(`SELECT * FROM role`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const role = new Role(res[i].id, res[i].title, res[i].salary, res[i].department_id);
                roleList.push(role);
            }
        }
    });

    db.query(`SELECT * FROM employee`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const employee = new Employee(res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id);
                employeeList.push(employee);
            }
        }
    });

    db.query(`SELECT manager.id, manager.first_name, manager.last_name, manager.role_id, manager.manager_id FROM employee AS manager, employee WHERE manager.id=employee.manager_id`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const manager = new Employee(res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id);
                managerList.push(manager);
            }
        }
    });
}

const updateLists = async () => {
    departmentList = [];
    roleList = [];
    employeeList = [];
    managerList = [];

    db.query(`SELECT * FROM department`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const department = new Department(res[i].id, res[i].name);
                departmentList.push(department);
            }
        }
    });

    db.query(`SELECT * FROM role`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const role = new Role(res[i].id, res[i].title, res[i].salary, res[i].department_id);
                roleList.push(role);
            }
        }
    });

    db.query(`SELECT * FROM employee`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const employee = new Employee(res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id);
                employeeList.push(employee);
            }
        }
    });

    db.query(`SELECT manager.id, manager.first_name, manager.last_name, manager.role_id, manager.manager_id FROM employee AS manager, employee WHERE manager.id=employee.manager_id`, (err,res) => {
        if(err) {
            console.error(err);
        } else {
            for(let i=0; i<res.length; i++) {
                const manager = new Employee(res[i].id, res[i].first_name, res[i].last_name, res[i].role_id, res[i].manager_id);
                managerList.push(manager);
            }
        }
    });
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

const listManagers = () => {
    const output = [];
    for(let i=0; i<managerList.length; i++) {
        const manager = {
            name: managerList[i].getFirstName() + ' ' + managerList[i].getLastName(),
            value: managerList[i].getID()
        }
        output.push(manager);
    }
    return output;
}

module.exports = {
    initialize,
    updateLists,
    listEmployees,
    listEmployeesExceptSelf,
    listEmployeesNone,
    listDepartments,
    listRoles,
    listManagers,
    getSelectedEmployee,
};