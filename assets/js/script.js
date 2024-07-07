const listaTareas = [
    {id: 1, tarea: "Lavar el auto", estado: false},
    {id: 2, tarea: "Lavar la Loza", estado: false},
    {id: 3, tarea: "Bañar el Perro", estado: false}
];

let idActual = 4;

// Agregando tarea al arreglo
const agregarTarea = () => {
    let valorInput = document.querySelector("#inputTareas").value;
    
    let nuevaTarea = {
        id: idActual, 
        tarea: valorInput ,
        estado: false
    };

    listaTareas.push(nuevaTarea);
    valorInput.value = "";
    idActual++;

    renderizado();
};

//Eliminando tarea del arreglo
const eliminarTarea = (id) => {
    const posicion = listaTareas.findIndex((elemento) => elemento.id === id);

    listaTareas.splice(posicion, 1);

    renderizado();
}

//Evitando que se pierdan los estados de true al chequear las tareas
const actualizarCheck = (id) => {
    const posicion = listaTareas.findIndex((objeto) => {
        if (id === objeto.id){
            return true;
        } 
        return false;
    });

    listaTareas[posicion].estado = !listaTareas[posicion].estado;
    renderizado();
}

// con esta funcion evitamos que cada vez que agregamos o eliminamos 
// alguna tarea se actualice bien la pagina y no se pierdan los datos
const renderizado = () => {
    const lista = document.querySelector("#listaTareas");
    let html = "";

    // Recorriendo el array con ciclo for y guardando en variable HTML
    for (let tareas of listaTareas) {
                
        if (tareas.estado) {
            chequeado = "checked";
        } else {
            chequeado = "";
        };
        
        html += `<div>
                    <p>${tareas.id}</p><p>${tareas.tarea}</p>
                    <input onclick="actualizarCheck(${tareas.id})" type="checkbox" ${chequeado}>
                    <button onclick="eliminarTarea(${tareas.id})">Eliminar</button>
                </div>`

    };

    // modificando el HTML
    lista.innerHTML = html;
    

    // Definiendo el total de tareas
    const totalTareas = document.querySelector(".totalTareas");
    totalTareas.innerHTML = "Total tareas: " + listaTareas.length

    // Definiendo el total de tareas REALIZADAS
    const totalTareasRealizadas = document.querySelector(".tareasRealizadas");

    const filtro = listaTareas.filter(estado => estado.estado === true)
    totalTareasRealizadas.innerHTML = "Total realizadas: " + filtro.length;
};

renderizado();































/*
const arregloTareas = ["Lavar la Ropa", ];

const agregarTarea = function() {
    const inputValue = document.querySelector("#inputTareas").value; 
    arregloTareas.push(inputValue);
    
    renderizarDatos();
}

const eliminarTarea = function(nombre) {
    // tareas.splice(posicion, 1)
    const posicion = arregloTareas.findIndex((tarea) => {
        if (tarea === nombre)
            return true;
        else {
            return false;
        }
    });

    arregloTareas.splice(posicion, 1);
    renderizarDatos();
    console.log(arregloTareas);
}


const renderizarDatos = function () {
    let html= "";
    const listaTareas = document.querySelector("#listaTareas");

    for (let tarea of arregloTareas) {
        html += `<li>${tarea}<button onclick="eliminarTarea()">X</button></li>`
    }

    listaTareas.innerHTML = html;
}
renderizarDatos();
*/