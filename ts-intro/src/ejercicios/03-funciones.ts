/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number , base:number, otronumero?: number):number {
    return  numero * base;
}


// const resultado = multiplicar(10, 5);

// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarHp();