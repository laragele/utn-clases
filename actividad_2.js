//importamos la biblioteca7libreria chance
const Chance = require(`chance`)

//creamos una instancia de chance
const chance= new Chance();

//generamos datos aleatorios utilizando Chance
const randomName= chance.name();
const randomAge= chance.age();
const randomEmail= chance.email();

//Imprimimos los datos aleatorios en la consola
console.log("nombre aleatorio: ", randomName);
console.log("edad aleatoria: ", randomAge);
console.log("email aleatorio: ", randomEmail);

//LO EJECUTAMOS PONIENDO EN EL TERMINAL: node actividad_2.js  (node + nombre del archivo)

const {sumar} = require(`./calculadora`); 
//con ese required pedimos el archivo si luego lo podemos usar aqui mismo
let sumita= (sumar(randomAge,randomAge));
console.log("resultado sumita con un modulo: ",sumita);

//instalo el paquete readline-sync porque node no soporta los prompts
const readLineSync= require(`readline-sync`);

const registrarEstudiantes=()=>{
    const cantidadEstudiantes= readLineSync.question("¿Cuantos estudiantes desea ingresar?");
    const estudiantes=[];
    for(let i=1; i<cantidadEstudiantes;i++){
        const nombre=readLineSync.question(`ingrese el nombre del estudiante ${i}: `);
        const edad=readLineSync.questionInt(`Ingrese la edad del estudiante ${nombre}: `);
        const estudiante={
            nombre:nombre,
            edad:edad
        }
        estudiantes.push(estudiante);
    };
    mostrarListaEstudiantes(estudiantes);

}

const mostrarListaEstudiantes=(estudiantes)=>{
    console.log("lista de estudiantes registrados: ");
    estudiantes.forEach(estudiante => {
        console.log(`Nombre del estudiante: ${estudiante.nombre}, Edad: ${estudiante.edad}.`)
    });
};
registrarEstudiantes();

//con Estas lineas de codigo levantamos un servidor
const http=require(`http`);
const server=http.createServer((req,res)=>{
    res.writeHead(200, {' Content-Type'  :' text/plain' });
    res.end("Hola mundo :)")
});

server.listen(3000, `localhost`, ()=>{
    console.log("servidor Node.js en ejecucion en http://localhost:3000/")
})