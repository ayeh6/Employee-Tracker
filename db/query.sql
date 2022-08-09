SELECT  employee.id,
        first_name,
        last_name,
        title,
        name,
        salary,
        (SELECT CONCAT(first_name, ' ', last_name) FROM employee AS managers WHERE employee.manager_id = managers.id) AS manager
FROM    employee,
        department,
        role
WHERE   employee.role_id = role.id AND role.department_id = department.id;