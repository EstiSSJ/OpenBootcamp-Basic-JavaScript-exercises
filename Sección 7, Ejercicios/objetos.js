const misDatos = {
    nombre: "Esteban",
    apellido: "Rodriguez",
    edad: 18,
    altura: 1.69,
    eresDesarrollador: true
}

const miEdad = misDatos.edad;
console.log(miEdad)

const listaDatosyAmigos = [
    misDatos, 
    {
        nombre: "Agustin",
        apellido: "Guillen",
        edad: 17,
        altura: 1.72,
        eresDesarrollador: false
    }, 
    {
        nombre: "Samuel",
        apellido: "Rapetto",
        edad: 18,
        altura: 1.81,
        eresDesarrollador: false
    }]

    const listaAmigosOrd = listaDatosyAmigos.sort((a,b) => {
        return b.edad - a.edad 
    })
console.log(listaAmigosOrd)
