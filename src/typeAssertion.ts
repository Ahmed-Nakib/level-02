let anything : any;

anything = 22 ;

(anything as number).toFixed

const kgToGMConverter = (input: string | number) => {
    if(typeof input === "number"){
        return input * 1000;
    }else if(typeof input === "string"){
        const [value] = input.split(" ")
        return `Converted output is: ${Number (value) * 1000}`
    }
}

const result1 = kgToGMConverter(2) as number;
console.log({result1});

const result2 = kgToGMConverter("2 kg") as string;
console.log({result2});



type CustomError = {
    message: string;
}

try {
    
} catch (error) {
    console.log((error as CustomError).message);
    
}