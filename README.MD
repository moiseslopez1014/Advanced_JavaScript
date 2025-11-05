## PROGRAMACION FUNCIONAL

### 1. Crea una funcion pura llamada descuento

### 2. dada persona: `{nombre: 'Lucia', edad: 30}` crea nueva que tenga misma edad pero nombre lucia perez. sin modifical original

### 3. Usar una funcion de orden superior `(operar)` para multiplicar dos numeros.

### 4.  Define dos funciones, `doble e incrementar`, y componlas (como en `compose`) para crear una funcion que primero duplique un numero y luego le sume 1.

## CLASES Y POO

### 5. CRean una clase `coche` con un constructor que reciba `marca` y `modelo`. Añade un metodo `arrancar()` que devuelva `"el conche <marca> ha arrancado"`.

### 6. Ana un metodo estatico tipos() a la clase Coche que devuelva "vehiculo terrestre"

### 7. Crea una clase CocheElectrico que herede de Coche y tenga un campo adicional bateria. Sobreescribe el metodo arrancar() para incluir ese dato.

### 8. anade un getter inffo  a la clase Coche que devuelva una cadena con la marca y el modelo.

### 9. crea una clase CajaFuerte con un campo privado #codigo inicializado en 4321. Anade un getter codigo para acceder al valor

### 10. Implementa una funcion `crearSuperMascota(nombre)` que combine las capacidades de un volador y un nadador, y pruebala.

### 11. Crea un objeto animal con un metodo sonido() que muestre 'hace un sonido'. Luego cra un objetosgato con Object.create(animal) y anade un metodo maullar() que diga 'miau'.

### 12. Usa Object.assign para combinar tres objetos (a,b,c) en uno solo.

### 13. Crea un objeto caja con dos propiedades, sellalo con Object.seal() e intenta anadir una propiedad. que ocurre?

### 14. Comprueba con `hasOwnProperty` si el objeto `gato` tiene su propio metodo `maullar` y si hereda `sonido`.

#### 15 . Crea un `Set` con los valores `[1, 2, 2, 3, 4]`, elimina el número 3 y comprueba si el número 4 está presente.
 
#### 16 . Añade al `Set` anterior el número 5 y muestra todos los valores como un array.
 
#### 17 . Crea un `WeakSet` y añade dentro dos objetos diferentes (`{nombre: "A"} y {nombre: "B"}`).
 
#### 18 . Crea un `Map` que relacione nombres de animales con su tipo (por ejemplo "perro" → "mamífero"), y muestra el tamaño del `Map`.
 
#### 19 . Crea un `Map` donde las claves sean objetos (por ejemplo `{ id: 1 }`) y los valores sean nombres.
 
#### 20 . Usa un `WeakMap` para asociar un objeto usuario con un token `"abc123"`.
 
#### 21 . Combina con spread los arrays `[1, 2], [3, 4] y [5, 6]` en uno solo.
 
#### 22 . Usa rest para extraer el primer y segundo elemento de `[10, 20, 30, 40]` y guardar el resto en otra variable.
 
#### 23 . Usa `flat()` sobre `[1, [2, [3, [4]]]]` para obtener `[1, 2, 3, 4]`.
 
#### 24 . Usa `flatMap()` sobre `[2, 4, 6]` para crear un nuevo array que contenga el número original y su mitad.
 
#### 25 . Crea un `Map` y recórrelo con un bucle `for...of` mostrando cada `clave` y `valor`.
 
## GARBAGE COLLECTOR
 
#### 26 . Crea un `setInterval` que aumente un contador y lo detenga automáticamente al llegar a 5.
 
#### 27 . Crea un `setTimeout` que muestre un mensaje tras 3 segundos, y luego cancélalo antes de que se ejecute.
 
#### 28 . Crea una función que simule añadir y eliminar un listener (usa `addEventListener` y `removeEventListener` con un click).
 
## MANEJO DE ERRORES
 
#### 29 . Usa `try/catch` para capturar el error de convertir a número un texto no numérico.
 
#### 30 . Crea una clase `ProductoError` que extienda de Error y una función `validarPrecio(precio)` que lance esa clase de error si el precio es menor que 0. Tip: En el constructor(msg) tendrás que incorporar super(msg).
 
#### 31 . Haz una función `abrirArchivo(nombre)` que lance un error si el nombre está vacío.
 
#### 32 . Crea un `try/catch` con `finally` que siempre muestre "Proceso finalizado".
 
#### 33 . Lanza un error genérico con `throw new Error("Algo salió mal")` y captúralo para mostrar su nombre y mensaje.
 