

let numero=0
const registrarEstudiantes=()=>{
    let cantidad=prompt("cantidad de alumnos que desea ingresar");
     document.write("la cantidad de estudiantes a ingresar son: ", cantidad, "<br>");
     let estudiantes=[];
        for(let i=1; i< cantidad; i++){
           let nombreEstudiante=prompt("nombre del estudiante " + i + ": ");
           let edad=prompt("edad del estudiante "+ nombreEstudiante +": ");
           document.write(`nombre del alumno ${i}: ${nombreEstudiante} y Edad de ${nombreEstudiante} : ${edad} <br> `); 
            let estudiante={nombre:nombreEstudiante, edad:edad}
            estudiantes.push(estudiante);
        }

    return estudiantes;
}

//let estudaintesRegistrados= registrarEstudiantes();


//Trabajo: actividad 1, Lara Gele

const Promedio=(numeros)=>{
    let suma=0;
    for(let numero=0; numero < numeros.length;numero++){
        suma+=numeros[numero];
    }
    let promedio= suma / numeros.length;
    return promedio;
}
let numeros=[9, 7, 1, 2, 10];
let resultado=Promedio(numeros);
console.log(`El resultado del promedio es de: ${resultado}`)
