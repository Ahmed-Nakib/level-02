//Function
//Array function, normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}       

add(2, 2)


const addArr = (num1: number, num2: number) => {
    return num1 + num2
}

addArr(2, 3)


//object => function => method

const poorUser = {
    name: "nakib",
    balance: 0,
    addBalance(value: number){
        const totalBalance = this.balance + value;
        return totalBalance
    }
}

poorUser.addBalance(100000)


const arr: number[] =[1, 2, 3, 6];

const sqrArray = arr.map((elem: number):number => elem * elem)