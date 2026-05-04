class Parent {
    constructor(public name: string, public age: number, public address: string){
    }

}

class Student extends Parent {

    getSleep(numHours: number){
        console.log(`${this.name} ${numHours} gonta ghumai`);
    }

    
}

class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string , designation: string){
        super(name, age, address)
        this.designation = designation;
    }
    

    takeClass(numHours: number){
        console.log(`${this.name} ${numHours} gonta ${this.address} thake`);
        
    }
}

const student = new Student("nakib", 22 , "Dhaka")

const teacher = new Teacher("Ahmed", 42 , "Dhaka", "senor teacher")


student.getSleep(16)
teacher.takeClass(16)