INSERT INTO department (name)
    VALUES  ('Administration'),
            ('Engineering'),
            ('Sales'),
            ('Finance'),
            ('Legal');

INSERT INTO role (title, salary, department_id)
    VALUES  ('CEO', 500000, 1),
            ('Secretary of CEO', 55000, 1),
            ('Product Manager', 200000, 2),
            ('Program Manager', 120000, 2),
            ('Senior Engineer', 90000, 2),
            ('Engineer', 75000, 2),
            ('Intern', 0, 2),
            ('Sales Lead', 30000, 3),
            ('Salesperson', 25000, 3),
            ('Accounting Lead', 40000, 4),
            ('Accountant', 30000, 4),
            ('Legal Team Lead', 60000, 5),
            ('Lawyer', 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ('Andrew', 'Yeh', 5, null),
            ('Deo', 'Halili', 1, null),
            ('Mika', 'Guider', 2, 2);