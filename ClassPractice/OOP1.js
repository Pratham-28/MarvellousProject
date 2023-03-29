// class = data + function
// class = char + behaviour
var Student = (function () {
    //Behaviours
    function Student(N, M, A, C) {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log(this.Name, this.Marks, this.Age, this.City);
    };
    return Student;
}());
var Obj135 = new Student("Pratham", 100, 24, "Dhule");
Obj135.Display();
