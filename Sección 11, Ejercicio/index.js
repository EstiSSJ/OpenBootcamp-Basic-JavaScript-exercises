class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ['JavaScript', 'HTML', 'CSS'];
    }

    obtenDatos() {
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante("Marcos");
const datosEstudiante = estudiante.obtenDatos()
console.log(datosEstudiante)
