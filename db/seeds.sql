INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

 
INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Bryan", "Reyes", 1),
        ("Jim", "Bob", 2),
        ("MJ", "Melendez", 3),
        ("Keith", "Cozart", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Freyja", "Hurley", 1, 1),
        ("Paisley", "House", 2, 2),
        ("Yehuda", "Bean", 3, 3),
        ("Clyde", "Young", 4, 4),
        ("Marleigh", "Pugh", 5, 1),
        ("Wynter", "Stafford", 6, 2),
        ("Zayd", "Corona", 7, 3),
        ("Jonah", "Farmer", 8, 4);