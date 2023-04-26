interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentA: Student = {
    firstName: "Donald",
    lastName: "Trump",
    age: 79,
    location: "USA"
};

const studentB: Student = {
    firstName: "Ron",
    lastName: "Desantis",
    age: 47,
    location: "USA"
};

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const tr = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.textContent = student.firstName;
    location.textContent = student.location;

    tr.appendChild(firstName);
    tr.appendChild(location);
    tbody.appendChild(tr);
});

document.body.appendChild(table);