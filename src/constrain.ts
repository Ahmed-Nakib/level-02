// constrain : strict rules deya
type Student = {
    id: number;
    name: string;
}

const addStudentToCourse = <T extends Student> (studentInfo : T) => {
    return{
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
}
const student2 = {
    id: 543,
    name: "Nakib",
    hasCar: true,
    isMarried: true,
}

const student3 = {
    id: 344,
    name: "",
    hasWatch: true,
}


const result = addStudentToCourse(student1)
console.log(result);

const result1 = addStudentToCourse(student2)
console.log(result1);

const result3 = addStudentToCourse(student3)
console.log(result3);
