// // Decoradores

// function classDecorator<T extends { new (...args: any[]): {}}>(
//     constructor:
// ){
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     };
// }

// // @miDecorador
// // @classDecorator
// class MiSuperClase {
//     public miPropiedad: string = 'ABC123';

//     imprimir(){
//         console.log('Hola Mundo');
//     }
// }

// const miClase = new MiSuperClase();
// console.log(miClase.miPropiedad);