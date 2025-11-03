// -------------------------------------------------------------
// 1) PROGRAMACIÓN FUNCIONAL - Funciones puras, HOF, composición
// -------------------------------------------------------------
console.log("\n=== 1) Programación Funcional ===");

// Funcion pura - mismo input - mismo output
const doble = (num) => num * 2;

function doble2 (num) {
    return num * 2
}
const numeroDoble = doble2(4)

// Inmutabilidad: no mutar, crear copia
const persona = {
    nombre: "Alejandro",
    edad: 45
}

const nuevaPersona = {...persona, edad: 35};
console.log(persona);
console.log(nuevaPersona);

//HOF : Reciben funciones como parametros y tb pueden veolver fucniones
const operar = (a, b, op) => op(a,b)

console.log("HOF sumar:",operar(2,3, (x,y) => x + y));

// Composición:
const aMayusculas = x => x.toUpperCase();

function aMayusculasBis(x) {
    return x.toUpperCase();
}

const agregarExclamacion = x => x + "!";

const fraseAGritos = x => agregarExclamacion(aMayusculas(x));

console.log("Ejemplo composicion:", fraseAGritos("Hola que tal"));

// Closures

function crearSaludo(nombre) {
    return function(saludo) {
        console.log(`${saludo}, ${nombre}`)
    }
}

const saludarAna = crearSaludo("Ana");

saludarAna("Hola");
saludarAna("Buenos días");


// -------------------------------------------------------------
// 2) CLASES Y POO - class, métodos estáticos, this, getters/setters, herencia, instanceof, campos privados, composición.
// -------------------------------------------------------------


class Persona {

    constructor (nombre, edad) {
        this.nombre = nombre,
        this.age = edad 
    }

    saludar() {
        return `Hola ${this.nombre}`
    }

    static especie() {
        return "Homo sapiens";
    }

    // Getters y Setters
    set apodo(apodo) {
        this._nickName = apodo;
    }

    get inicial() {
        return this.nombre.charAt(0);
    }
}

const isaac = new Persona("Isaac", 35);
console.log(isaac);
console.log(isaac.saludar());
console.log(Persona.especie());
isaac.apodo = "Boina";
console.log("Apodo de la persona: ", isaac);
console.log("Get Inicial: ", isaac.inicial);

class Alumno extends Persona {

    constructor (nombre, curso) {
        super(nombre);
        this.curso = curso;
    }

    saludar() {
        return `${super.saludar()}, estas en el curso ${this.curso}`;
    }

}

const alumno = new Alumno("Luis", "JS");
console.log(alumno.saludar());
console.log(alumno instanceof Alumno);
console.log(alumno instanceof Persona);
console.log(isaac instanceof Alumno);
console.log(isaac instanceof Persona);


// Private fields

class Caja {
    
    #secreto = 123;

    get valor() {
        return this.#secreto;
    }
}

const box = new Caja();
console.log(box.secreto);
console.log("Valor por get: ", box.valor);


// Composición de objetos

const volador = {
    volar() {
        console.log("Estoy volando");
    }
}
const nadador = {
    nadar() {
        console.log("Estoy nadando");
    }
}

function crearPato(nombre) {
    return {
        nombre,
        ...volador,
        ...nadador
    }
}



const pato = crearPato("Donalds");
pato.nadar();
pato.volar();
console.log(pato);
