// array, object

// TS - tuple


let bazarList : string[] = ['eggs', 'milk', 'bread']

bazarList.push('banana')



let mixedArr :(string | number)[] = ["eggs", 2, "milk", 1, "suger", 4]

let coordinates: [number, number] = [20, 30]

let couple: [string, string]= ["Husband", "Wife"]
let xy : [string, number]= ["Husband", 90]


//reference type - object

const user: {
    firstName: string;
    middleName: string;
    lastName?: string;
    isMarried: boolean;
} = {
    firstName: "Nakibul",
    middleName: "Islam",
    isMarried: true
}
