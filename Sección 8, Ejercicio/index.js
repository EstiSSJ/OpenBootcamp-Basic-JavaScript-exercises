function siempreTrue() {
    return true;
}

async function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000)
    })
}

function* generadorIndiciesPares() {
    let indice = 0;
    while (true) {
        yield indice;
        indice += 2
    }
}
const generador = generadorIndiciesPares();

console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
