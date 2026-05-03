// dynamically generalize


// type GenericArray = Array<string>;
type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. S","Mr. E", "Mr. A"];
// const friends: Array<string> = ["Mr. S","Mr. E", "Mr. A"];
const friends: GenericArray<string> = ["Mr. S","Mr. E", "Mr. A"];

// const rollNumber: number[] = [2, 4, 6, 7];
// const rollNumber: Array<number> = [2, 4, 6, 7];
const rollNumber: GenericArray<number>= [2, 4, 6, 7];

// const isEligibleList: boolean[] = [false, true, false]
// const isEligibleList: Array<boolean> = [false, true, false]
const isEligibleList: GenericArray<boolean> = [false, true, false]


type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [2, 3];
const coordinates2: Coordinates<string, string> = ["2", "4"];

const userList: GenericArray<{name:string, age: number}> = [
    {
        name: "Nakib",
        age: 2
    },
    {
        name: "Rakib",
        age: 3
    }
]

// best code 

type user = {name:string, age: number}
const userList1: GenericArray<user> = [
    {
        name: "Nakib",
        age: 2
    },
    {
        name: "Rakib",
        age: 3
    }
]

