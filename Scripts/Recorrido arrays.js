var articulos = [
    {
        nombre: "bici",
        costo: 20,
    },
    {
        nombre: tv,
        costo: 300,
    },
    {
        nombre: celular,
        costo: 1000,
    },
    {
        nombre: laptop,
        costo: 200,
    },
    {
        nombre: teclado,
        costo: 100,
    }
]

var artivuloFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// filter devuelve los items que tengan resultado true en la funcion

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// map retorna algo del array original con modificaciones hechas por la funcion

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre == "laptop"
});

// find encuentra el item del array original si la funcion retorna True

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Hace una accion especifica por cada elemento en el array

var baratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;    
});

// Retorna true or false si alguno en la lista devuelve true

// find() : Devuelve el primer elemento del array que cumpla con la condición dada
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada