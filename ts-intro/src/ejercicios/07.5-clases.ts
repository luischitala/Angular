
// class Heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: number;
//     // imprimirNombre(){
//     //     return this.alterEgo + ' ' + this.nombreReal;
//     // }
//     // constructor() {

//     // }
// }

// interface Personaje2 {
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: number;

// }

// const spiderman: Personaje2 = {
    
// }

// class Heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: number;

//     constructor(alterEgo: string) {
//         this.alterEgo = alterEgo;
//     }
  
// }

class Heroe {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {}
  
}

const ironman = new Heroe('Ironman', 45, 'Tony');


console.log(ironman);