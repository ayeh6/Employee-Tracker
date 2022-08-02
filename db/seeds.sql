INSERT INTO department (id, name)
    VALUES  (1, 'Administration'),
            (2, 'Engineering'),
            (3, 'Sales'),
            (4, 'Finance'),
            (5, 'Legal');

INSERT INTO role (id, title, salary, department_id)
    VALUES  (1, 'CEO', 500000, 1),
            (2, 'Secretary of CEO', 55000, 1),
            (3, 'Product Manager', 200000, 2),
            (4, 'Program Manager', 120000, 2),
            (5, 'Senior Engineer', 90000, 2),
            (6, 'Engineer', 75000, 2),
            (7, 'Intern', 0, 2),
            (8, 'Sales Lead', 30000, 3),
            (9, 'Salesperson', 25000, 3),
            (10, 'Accounting Lead', 40000, 4),
            (11, 'Accountant', 30000, 4),
            (12, 'Legal Team Lead', 60000, 5),
            (13, 'Lawyer', 50000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES  (1, 'Andrew', 'Yeh', 5, null),
            (2, 'Deo', 'Halili', 1, null),
            (3, 'Mika', 'Guider', 2, 2);
