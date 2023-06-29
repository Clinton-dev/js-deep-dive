// Constructor functions
// Away to create objects on demand and immediately provide behavior to them

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const amazingStudent = new Student(1, "Clint");

// if you forget new you wont get an error and it wont work as expected
Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];
  return this.subjects;
};

Student.prototype.removeSubject = function (target) {
  return (this.subjects = [
    ...this.subjects.filter((subject) => subject != target),
  ]);
};

console.log(amazingStudent.addSubject("Unit testing"));
console.log(amazingStudent.removeSubject("Unit testing"));

// functions can have properties just like any other javascript objects
