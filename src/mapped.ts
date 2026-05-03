// mapped types

// 


const arrayOfNum : number[] = [1, 2, 3,];

const arrayOfString : string[] = ['1', '2', '4']


const arrayOfStriaUsing : string[] = arrayOfNum.map(((num) =>
     num.toString()))

console.log(arrayOfStriaUsing);


type AreaOfNum = {
     height: number;
     width: number;
}

type Height = AreaOfNum["height"]



// type AreaOfString = {
//      height: string;
//      width: string;
// }

// type AreaOfString = {
//      [key in "height" | "width"]:  string;
// }


// type AreaOfString = {
//      [key in keyof AreaOfNum]:  string;
// }

type Area<T> = {
     [key in keyof T]: T[key];
}

const Area1: Area <{height: string, width: string}> = {
     height: "50",
     width: '55'
}