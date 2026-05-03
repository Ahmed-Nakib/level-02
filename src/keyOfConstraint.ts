// keyof : type operator



type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}


type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "ship";


type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: "Nakib",
    address: {
        city: "ctg"
    }
}

// const myId = user.id;

const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

console.log({myId, myAddress, myName});



// const getPropertyObj = (obj: User, key: "id" |"name" | "address") => {
//     return obj[key]
// }
const getPropertyObj = <X> (obj: X, key: keyof X) => {
    return obj[key]
}

const result = getPropertyObj(user, "name")
console.log(result);


const product = {
    brand: "HP"
}

const student = {
    id: 123,
    class: "four"
}
const result2 = getPropertyObj(product, "brand")
const result3 = getPropertyObj(student, "id")
