// class = data + function
// class = char + behaviour

class Student
{
    // characteristics - no need to mention any keyword like var while decalration in class
    Name: string;
    Marks: number;
    Age: Number;
    City: string;

    //Behaviours
    constructor(N: string, M:number, A:number, C:string)
    {
        console.log("Inside constructor")
        this.Name = N
        this.Marks = M
        this.Age = A
        this.City = C
    }

    Display(): void
    {
        console.log(this.Name, this.Marks, this.Age, this.City)

    }

}

var Obj135 = new Student("Pratham", 100, 24, "Dhule") 
Obj135.Display()

