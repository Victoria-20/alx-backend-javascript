interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: 'Oguti',
    lastName: 'Victoria',
    age: 26,
    location: 'Kampala'

};

const student2: Student = {
    firstName: 'Nafula',
    lastName: 'Olgah',
    age: 30,
    location: 'Busia'
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach(student => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const td_firstName = document.createElement('td');
    const td_location = document.createElement('td');
    td_firstName.innerHTML = `${student.firstName}`;
    td_location.innerHTML = `${student.location}`;
    tr.appendChild(td_firstName);
    tr.appendChild(td_location);
});
