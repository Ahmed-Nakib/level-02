//spread operator    

const fiends = ["mamun", "romjan"]
const schoolFiends = ["kobir", "akas"]
const collegeFiends = ["habib", "bokor"]

fiends.push(...schoolFiends);
fiends.push(...collegeFiends)

console.log(fiends);



const user = {
    name: "Nakib",
    phone: "01700000000"
}

const otherInfo = {
    hobby: "outing",
    favoriteColor: "black"
}

const userInfo = {...user, ...otherInfo}

console.log(userInfo);


// rest operator      


// const sendInvite = (friend1: string, friend2: string) => {
//     console.log(`Send invitation to ${friend1} `);
//     console.log(`Send invitation to ${friend2} `);
// }

// sendInvite("bulbul", "pulpul")


// use rest operator 

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send invitation to ${friend} `)
)
}

sendInvite("bulbul", "pulpul")


