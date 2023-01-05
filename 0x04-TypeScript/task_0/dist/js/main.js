;
var student1 = {
    firstName: 'Oguti',
    lastName: 'Victoria',
    age: 26,
    location: 'Kampala'
};
var student2 = {
    firstName: 'Nafula',
    lastName: 'Olgah',
    age: 30,
    location: 'Busia'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var td_firstName = document.createElement('td');
    var td_location = document.createElement('td');
    td_firstName.innerHTML = "" + student.firstName;
    td_location.innerHTML = "" + student.location;
    tr.appendChild(td_firstName);
    tr.appendChild(td_location);
});
//# sourceMappingURL=main.js.map