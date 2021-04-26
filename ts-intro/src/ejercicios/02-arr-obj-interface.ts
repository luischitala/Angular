/*
    ===== Código de TypeScript =====
*/

// let habilidades: (boolean | string | number)[] = ['bash', 'counter', 100];
let habilidades: string [] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

// const personaje: any = {
const personaje: Personaje = {
    nombre: 'strider',
    hp:100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta'
console.table(personaje);