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

//12 