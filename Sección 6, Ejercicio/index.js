let listaDeCompra = ["Hamburguesas", "Pan", "Cheddar", "Leche", "Pepsi", "Huevos"];
console.log(listaDeCompra)

listaDeCompra.push("Aceite de Girasol");
console.log(listaDeCompra)

listaDeCompra = listaDeCompra.filter(item => item !== "Aceite de Girasol");
console.log(listaDeCompra)

let peliculasFavs = [
    { titulo: "Interstellar", director: "Christopher Nolan", fecha: 2014 },
    { titulo: "The Hunger Games", director: "Gary Ross",  fecha: 2012 },
    { titulo: "Blade Runner 2049", director: "Denis Villeneuve", fecha: 2017 },
]
console.log(peliculasFavs)

let peliculasAfter2010 = peliculasFavs.filter( pelicula => pelicula.fecha > 2010 );
console.log(peliculasAfter2010)

let directoresPeliculas = peliculasFavs.map( pelicula => pelicula.director );
console.log(directoresPeliculas)

let titulosPeliculas = peliculasFavs.map( pelicula => pelicula.titulo );
console.log(titulosPeliculas)

let listaDirectoresyTitulos = directoresPeliculas.concat(titulosPeliculas);
console.log(listaDirectoresyTitulos)

let listaDirectoresyTitulosSpread = [...directoresPeliculas, ...titulosPeliculas];
console.log(listaDirectoresyTitulosSpread)
