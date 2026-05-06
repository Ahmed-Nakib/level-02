// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){
//         this.name= name
//         this.species = species
//         this.sound = sound
//     }

//     makeSound(){
//         console.log(`The ${this.name} is making ${this.sound}`);
        
//     }
// }



//parameter properties


class Animal {

    constructor(public name: string,public species: string, public sound: string){
    }

    makeSound(){
        console.log(`The ${this.name} is making ${this.sound}`);
        
    }
}

const dog = new Animal ( 'dogesh bhai','dog', 'ghew ghew');
const cat = new Animal ( 'baker bhai','cat', 'mew mew');

// console.log(dog.name);
// console.log(dog.sound);
// console.log(dog.species);

cat.makeSound()
dog.makeSound()
