INSERT INTO department (id, department_name)
VALUES  (1, "Engineering"),
        (2, "Finance"),
        (3, "Legal"),
        (4, "Sales");

 
INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Sales Lead", 100000, 4),
        (2, "Salesperson", 80000, 4),
        (3, "Lead Engineer", 150000, 1),
        (4, "Software Engineer", 120000, 1),
        (5, "Account Manager", 160000, 2),
        (6, "Accountant", 125000, 2),
        (7, "Legal Team Lead", 250000, 3),
        (8, "Lawyer", 190000, 3);

INSERT INTO employee (manager_id, first_name, last_name, role_id)
VALUES  (1, "Bryan", "Reyes", 4),
        (2, "Jim", "Bob", 2),
        (3, "MJ", "Melendez", 3),
        (4, "Keith", "Cozart", 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (5, "Freyja", "Hurley", 3, 1),
        (6, "Paisley", "House", 2, 2),
        (7, "Yehuda", "Bean", 3, 3),
        (8, "Clyde", "Young", 4, 4),
        (9, "Marleigh", "Pugh", 5, 1),
        (10, "Wynter", "Stafford", 6, 2),
        (11, "Zayd", "Corona", 7, 3),
        (12, "Jonah", "Farmer", 8, 4);