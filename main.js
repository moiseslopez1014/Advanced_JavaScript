/*
// 1. funcion descuento
console.log('===1. funcion descuento===');

const descuento = precio => precio * 0.9;

console.log(descuento(33.95));

// 2. persona
console.log('\n===2. persona===');

const lucia = {
    nombre: 'Lucia',
    edad: 30,
}

const nuevalucia = {...lucia, nombre: 'Lucia Perez'};

console.log(lucia);
console.log(nuevalucia);

// 3. funcion operar
console.log('\n===3. funcion operar===');

const operar = (a,b, operation) => operation(a,b);
console.log(operar(4,3, (a,b) => a*b));

// 4. Doble e incrementar
console.log('\n===4. Doble e incrementar===');

const doble = d => d*2;
const incrementar = i => i+1;

const compose = c => incrementar(doble(c));

console.log(compose(5));
//console.log(doble(5));
//console.log(incrementar(5));

// 5. Coche
console.log('\n===5. Coche===');

class Coche {
    constructor (marca, modelo) {
        this.brand = marca;
        this.model = modelo;
    }
    arrancar() {
        return `El coche ${this.brand} ha arrancado`
    }

    static tipos() {
        return 'vehiculo terrestre';
    }

    get info() {
        return `Marca: ${this.brand} | Modelo: ${this.model}`;
    }
}

const coche1 = new Coche('Seat', 'Ibiza');
console.log(coche1.arrancar());

// 6. metodo estatico
console.log('\n===6. metodo estatico===');

console.log(Coche.tipos());

// 7. Coche Electrico
console.log('\n===7. Coche electrico===');

class CocheElectrico extends Coche {
    constructor (marca, modelo, bateria) {
        super(marca, modelo);
        this.batery = bateria;
    }

    arrancar() {
        return `la bateria ${this.batery} se han conectado`;
    }
}

const electrico1 = new CocheElectrico('Tesla', 'Cochesito del maincraft', '8x bateria AA');

console.log(electrico1.arrancar());

// 8. Getter
console.log('\n===8. Getter===');

console.log(coche1.info);

// 9. CAJA FUERTE
console.log('\n===9. CAJA FUERTE===');

class CajaFuerte {
    #codigo = 4321;

    get clave() {
        return this.#codigo;
    }
}

const caja = new CajaFuerte;
console.log(caja.codigo);
console.log(caja.clave);

// 10. CrearSuperMascota
console.log('\n===10. CrearSuperMascota===');

const volador = {
    volar() {
        console.log('vuela');
    }
}

const nadador = {
    nadar() {
        console.log('nada');
    }
}


function crearSuperMascota(nombre) {
    return {nombre, ...volador, ...nadador};
}

const gatoVoladorNadadooooor = crearSuperMascota('El gato voladoooor');
console.log(gatoVoladorNadadooooor.nombre);
gatoVoladorNadadooooor.nadar();
gatoVoladorNadadooooor.volar();


// 11. gato maullar
console.log('\n===11. Gato.maullar===');

const animal = {
    sonido() {
        console.log('hace un sonido');
    }
}

const gato = Object.create(animal);
gato.maullar = () => {console.log('miau')};

gato.sonido();
gato.maullar();

//12 combi
console.log('\n===12. Combinar objetos===');

const primer12 = {a: 2};
const secun12 = {b:33};
const tercer12 = {c:396};

const combi12 = Object.assign({}, primer12, secun12, tercer12);

console.log(primer12, secun12, tercer12, combi12);


// 13 Seal
console.log('\n===13. SEAL===');

const caja13 = {
    peso: 11,
    destino: 'cabra'
}

Object.seal(caja13);

caja13.destino = 'arcos';
//caja13.tamano = 30;

console.log(caja13); // la clave tamano no se puede agregar, aunque si se pudo combiar el valor de destino.

// 14 Has Own Property
console.log('\n===14. HasOwnProperty===');

console.log(gato.hasOwnProperty('maullar'));
console.log(gato.hasOwnProperty('sonido'));


// 15 set
console.log('\n=== 15 Set ===');

const set15 = new Set([1,2,2,3,4]);

set15.delete(3);

console.log(set15.has(4));

//16 anade a un set
console.log('\n=== 16 Set add ===');

set15.add(5)

console.log([...set15]);

// 17 WeakSet 
console.log('\n=== 17 WeakSet ===');

const weak17 = new WeakSet();

weak17.add({nombre: 'a'});
weak17.add({nombre: 'b'});



// 18 Map
console.log('\n=== 18 MAP ===');


const map18 = new Map();

map18.set('gato', 'mamifero');
map18.set('humano', 'mamifero');
map18.set('serpiente', 'anfibio');
map18.set('hormiga', 'insecto');
map18.set('larva', 'insecto');

for (const [k, v] of map18) {
    console.log(`${k} => ${v}`);
}
console.log('numero objetos map: ',map18.size);

//19 MAP con objetos en keys
console.log('\n=== 19 MAP con objetos en claves ===');

const map19 = new Map();

map19.set({id:1}, 'objeto1')
map19.set({id:2}, 'objeto2')
map19.set({id:3}, 'objeto3')
map19.set({id:4}, 'objeto4')
map19.set({id:5}, 'objeto5')
map19.set({id:6}, 'objeto6')

console.log(map19);

//20 WeakMap
console.log('\n === 20 WeakMap ===');

const usuarios20 = {
    'nombre': 'Juan',
}

const weak20 = new WeakMap();

weak20.set(usuarios20, 'abc123')
console.log(weak20.has(usuarios20));

// 21 Spread
console.log('\n === 21 Spread ===');

const arr21uno = [1,2];
const arr21dos = [3,4];
const arr21tre = [5,6];

const arrSpreaded = [...arr21uno,...arr21dos,...arr21tre, 7,8]

console.log(arr21uno,arr21dos,arr21tre,arrSpreaded);

// 22 Rest
console.log('\n=== 22 REST ===');

const arr22unido = [10,20,30,40,44];

const [primero22, segundo22, ...resto22] = arr22unido;

console.log(primero22,segundo22,resto22);


// 23 FLAT
console.log('\n=== 23 FLAT ===');

const arr23 = [1, [2, [3, [4]]]];

console.log(arr23.flat(3));

// 24 FLATMAP
console.log('\n=== 24 FLATMAP ===');

const arr24 = [2,4,6];

console.log(arr24.flatMap(n => [n,n*0.5]));

//25 MAP FOR OF
console.log('\n=== 25 MAP FOR OF ===');

const map25 = new Map();

map25.set('clave1', 'valor1')
map25.set('clave2', 'valor2')
map25.set('clave3', 'valor3')
map25.set('clave4', 'valor4')
map25.set('clave5', 'valor5')

//for ([k,v] of map25) {
//    console.log(k,v);
//}


// 26 clearInterval
console.log('\n=== 26 CLEAR INTERVAL ===');

let contador26 = setInterval(intervalillo, 2000);

let contando26 = 1;

function intervalillo() {
    if (contando26 === 5) {
        clearInterval(contador26);
        return contando26 = null;
    }

    console.log(contando26);
    return contando26++;

}

// 27 Timeout
console.log('\n === 27 TIMEOUT ===');

let contador27 = setTimeout(() => console.log('Hola'), 2000);

clearTimeout(contador27);

//28 EventListener
console.log('\n=== 28 EventListener ===');

const anchorElement = document.querySelector('#app');
const botonDOM = document.querySelector('#botoncito');

botonDOM.textContent = 'EventListener';

botonDOM.addEventListener('click', funcionNumeroRandom);

function removeListener() {
    botonDOM.removeEventListener('click', funcionNumeroRandom);
}

function funcionNumeroRandom() {
    console.log(Math.random());
    removeListener();
}

// 29 Manejo de errores
console.log('\n === 29 TRY/CATCH ===');

try {
    let conversion29 = 'Mensaje';
    if (isNaN(conversion29)) {
        throw new Error('Un error de NaN');
    }
    console.log(parseInt(conversion29, 10));
} catch (error) {
    console.log(error);
}

// 30 Nueva Clase ERROR
console.log('\n=== 30 Nueva clase Error ===');

class ProductoError extends Error {
    constructor(msg) {
        super(msg);
    };
}

let preciototal = -2.99;

function validarPrecio(precio) {
    if (precio < 0) throw new ProductoError('El precio no puede ser inferior a cero');
    console.log('Precio total: ', precio + 39);
}
try {
    validarPrecio(preciototal);
} catch (error) {
    console.log(error);
}

// 31 Error vacio
console.log('\n=== 31 Error cuando hay campo vacio ===');


class ArchivoError extends Error {
    constructor(msg) {
        super(msg);
    };
}

function abrirArchivo(nombre) {
    if (!nombre || nombre === '') throw new ArchivoError('El nombre del archivo no puede estar vacio');
    console.log(`Abriendo archivo${nombre}`);
}

try {
    abrirArchivo('Error.log');
} catch (error) {
    console.log(error);
}

// 32 finally
console.log('\n=== 32 Finally ===');

function ejercicio32Finally (num) {
    try {
        if (num > 100) {
            throw new Error('El porcentaje sobrepaso el maximo');
        }
        console.log(num * 0.39);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('La comprobacion a terminado');
    }
}

ejercicio32Finally(87);

// 33 generico
console.log('\n=== 33 Error Generico ===');

try {
    throw new Error('Algo salio mal');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// 34 Callback
console.log('\n=== 34 CallBack BRUJERIA ===');

function cargarAlgo(callback) { //2. recibe funcion como parametro
    setTimeout(() =>  callback('Leido correctamente'), 100); //3. inicia funcion como resultado de carga 34 , con mensaje como argumento
}

const carga34 = (parametro) => console.log(parametro);// 4. inicia la funcion que  que va a recibir el mensaje como parametro, para meterselo al console log.
cargarAlgo(carga34); //1. inicia con funcion de argumento

// 35 Promesas

function taimAut(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function promesilla() {
    await taimAut(144);
    console.log('Promesa lista');
}

promesilla();

// 36 promesa fallo
console.log('\n=== 36 promesa fallo ===');
const rompepromesas = new Promise((res, rej) => {
    const success = false;
    if (success) {
        res('todo bien');
    }
    else {
        rej('Todo mal!');
    }
})

rompepromesas.then((resultado) => console.log(resultado)).catch((rechazo) => console.log(rechazo));

// 37 promesa con try catch

const promesasAreNotTrue = new Promise((res, rej) => {
    const success = true;
    if (success) {
        setTimeout(() => res('terminado'), 200);
    }
    else {
        rej('no terminao');
    }
})

async function getPromiseResponse() {
    try {
        const response = await promesasAreNotTrue;
        if(response !== 'terminao') throw new Error('Promesa fallia, como no')
            console.log('respuesta asincrona: ', response);
    } catch (error) {
        console.log(error)
    }
}

getPromiseResponse();
*/


// 38 Stringify
console.log('\n === 38 stringify ===');

const persona38 = {
    nombre: 'Juan',
    edad: 41,
    ciudad: 'La Isla de Leon',
};

console.log(JSON.stringify(persona38));

// 39 Parse
console.log('\n === 39 Parse ===');

const persona39 = '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}';
const persona39parseada = JSON.parse(persona39);
console.log(persona39parseada.nombre);

// 40 array Objetos
console.log('\n=== 40 array objetos ===');

const alumnos40 = [
{nombre: 'Jaimito',
    nota: 7.2
},
{nombre: 'Josefina',
    nota: 8
},
{nombre: 'Papadopoulos',
    nota: 4.95
}]

console.log(alumnos40);

const alumnos40jsoneado = JSON.stringify(alumnos40);
console.log(alumnos40jsoneado);

const alumnos40reparseado = JSON.parse(alumnos40jsoneado);
console.log(alumnos40reparseado);

for (const elemento of alumnos40reparseado) {
    console.log(elemento.nombre);
}

// 41 de verdad objeto con funcion
console.log('\n === 41 de verdad ===');

const persona41 = {
    nombre: 'Juan',
    edad: 41,
    ciudad: 'La Isla de Leon',
    saludar() {
        console.log('Hola', this.nombre);
    }
};


const persona41string = JSON.stringify(persona41);
console.log(persona41string);

const persona41stringparse = JSON.parse(persona41string);
console.log(persona41stringparse);

// 41 nullish
console.log('\n === 41 nullish ===');

let puntos;

console.log(puntos ?? 0);

// 42 con cero
console.log('\n === 42 con cero ===');

let valor = 0;

console.log(valor ?? 10);

// 43 aplicando por valor por defecto
console.log('\n=== 43 aplicando un valor por defecto ===');

let nombreUsuario = null;
console.log(nombreUsuario ?? 'Invitado');

// 44 nullish para funcion
console.log('\n=== 44 nullish para funcion ===');

function obtenerDescuento(precio) {
    let descuento = (precio ?? 0) * 0.1;
    console.log(descuento);
}

obtenerDescuento();

// 45 optional chaining
console.log('\n === Optional chaining ===');

const libro = { titulo: "1984", autor: { nombre: "Orwell" } }

console.log(libro?.autor?.nombre);
console.log(libro?.editorial?.nombre ?? 'Sin editorial');

// 46 con objeto vacio
console.log('\n === 46 con objeto vacio ===');

const obj46vacio = {};

console.log(obj46vacio?.datos?.valor); //se puede quitar el ? de objvacio porque si existe, pero da error al quitarlo de datos.

// 47 con valores null
console.log('\n=== 46 con valores null ===');

const usuario47 = null;

console.log(usuario47?.nombre ?? 'Usuario no registrado');

// 48 mostrar alternativa cuando no haya dato
console.log('\n === 48 mostrar alternativa cuando no haya dato ===');

const clientes48 = [
    {
        nombre: 'Pepe',
        direccion: {
            ciudad: 'Sevilla'
        }
    },
    {
        nombre: 'Pepa',
        direccion: {
            
        }
    },
    {
        nombre: 'Dick',
        direccion: {
            ciudad: 'Lelystad'
        }
    },
    {
        nombre: 'Humphrey'
    },
];

for (const element of clientes48) {
    console.log(`Nombre: ${element.nombre} | Ciudad: ${element.direccion?.ciudad ?? 'Sin ciudad'}`);
}