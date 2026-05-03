// Generic Functions in TypeScript

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number, name: string}) => {
//     return [value]
// };


const createArrayWithGeneric = <T> (value: T) => {
    return [value]
}


const arrString = createArrayWithGeneric ("Apple");
const arrNumber = createArrayWithGeneric (4);
const arrObj = createArrayWithGeneric ({
    id: 2,
    name: 'Nakib'
});


// tuple

const createArrayWithTuple = (param1: string,  param2: string) => {
    return [
        param1,
        param2
    ]
}


const createArrayTupleWithGeneric = <T, Y> (param1: T,  param2: Y) => {
    return [
        param1,
        param2
    ]
}


const res1 = createArrayTupleWithGeneric("Nakib", false)
const res2 = createArrayTupleWithGeneric(222, {name: "Nakib"})



//


const addStudentToCourse = <T> (studentInfo : T) => {
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


const result = addStudentToCourse(student1)
console.log(result);

const result1 = addStudentToCourse(student2)
console.log(result1);
