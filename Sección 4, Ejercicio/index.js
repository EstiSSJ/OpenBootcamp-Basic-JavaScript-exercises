const nombre = "Esteban";
const apellido = "Ribeiro";

const estudiante = nombre.concat(" ", apellido);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const letrasInEstudiante = estudiante.length;
const primerLetraNombre = nombre[0];
const ultimaLetraApellido = apellido[apellido.length - 1];
const estudianteSinEspacio = estudiante.replace(/ /g, "");
const NombreInEstudiante = estudiante.includes(nombre);
