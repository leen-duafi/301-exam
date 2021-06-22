let format = document.getElementById("format");
format.addEventListener("submit", addStudent);

function addStudent(event) {
    event.preventDefault();
    let StudentName = event.target.name.value;
    let course = event.target.course.value;

    console.log(StudentName, course);

    let newStudent = new Student(StudentName, course);
    console.log(newStudent);

    newStudent.random();
    newStudent.render();
    


    table.textContent = "";

    getHeader();

    for (let i = 0; i < students.length; i++) {
        students[i].render();

    }

    format.reset();
    store();
}

students = [];
function Student(StudentName, course) {
    this.StudentName = StudentName;
    this.course = course;
    this.studentGrade = 0;
    students.push(this);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Student.prototype.random = function () {
    this.studentGrade = getRndInteger(0, 100);
}


let div = document.getElementById('table')
let table = document.createElement('table')
div.appendChild(table);

function getHeader() {
    let thElement = document.createElement('th');
    table.appendChild(thElement);
    thElement.textContent = "Student Name";

    let thElement2 = document.createElement('th');
    table.appendChild(thElement2);
    thElement2.textContent = "Student Grade";

    let thElement3 = document.createElement('th');
    table.appendChild(thElement3);
    thElement3.textContent = "Course";

    let thElement4 = document.createElement('th');
    table.appendChild(thElement4);
    thElement4.textContent = "statues";
}

Student.prototype.render = function () {
    let trElement = document.createElement('tr');
    table.appendChild(trElement);


    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.StudentName;


    let tdElement2 = document.createElement('td');
    trElement.appendChild(tdElement2);
    tdElement2.textContent = this.studentGrade;


    let tdElement3 = document.createElement('td');
    trElement.appendChild(tdElement3);
    tdElement3.textContent = this.course;


    if (this.studentGrade >= 50) {
        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = "pass";

    }
    else if (this.studentGrade < 50) {
        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = "fail";
    }


    // let tdElement=document.createElement('td');
    // trElement.appendChild(tdElement);
    // tdElement.textContent=this.StudentName;

}


// Student.prototype.status = function () {
//     if (this.studentGrade > 50) {
//         let tdElement = document.createElement('td');
//         trElement.appendChild(tdElement);
//         tdElement.textContent = "pass";

//     }

//     else if (this.studentGrade < 50) {
//         let tdElement = document.createElement('td');
//         trElement.appendChild(tdElement);
//         tdElement.textContent = "fail";
//     }
// }
function store() {
    let storage = JSON.stringify(students);
    localStorage.setItem('students', storage)
}

function show() {
    let data = localStorage.getItem('students');
    let parse = JSON.parse(data);
    getHeader();
    for (let i = 0; i < parse.length; i++) {
        let pop = new Student(parse[i].StudentName, parse[i].course, parse[i].random)
        pop.render();
        pop.random();

    }
}
show();