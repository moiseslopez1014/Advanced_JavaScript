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
const tercer12 = {c:456};

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
caja13.tamano = 30;

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
const [...set15toarray] = set15

console.log(set15toarray);

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
console.log(weak20);

// 21 Spread
console.log('\n === 21 Spread ===');

const arr21uno = [1,2];
const arr21dos = [3,4];
const arr21tre = [5,6];

const arrSpreaded = [...arr21uno,...arr21dos,...arr21tre, 7,8]

console.log(arr21uno,arr21dos,arr21tre,arrSpreaded);

// 22 Rest
console.log('\n=== 22 REST ===');

const arr22unido = [10,20,30,40,50];

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

for ([k,v] of map25) {
    console.log(k,v);
}