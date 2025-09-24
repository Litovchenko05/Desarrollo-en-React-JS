class Tarea {
    static contadorId = 0;
    constructor(titulo){
        this.id = Tarea.contadorId++
        this.titulo = titulo
        this.completada = false
    }

    toggleEstado(){
        this.completada = !this.completada
    }
}

class GestorTareas {
    static tareas = []

    static agregarTarea(titulo){
        const nuevaTarea = new Tarea(titulo)
        this.tareas.push(nuevaTarea)
    }

    static listarTareas(){
        this.tareas.forEach(tarea => console.log(tarea))
    }
    
    static buscarPorTitulo(titulo){
        return this.tareas.find(tarea => titulo == tarea.titulo)
    }

    static listarCompletadas(){
        return this.tareas.filter(tarea => tarea.completada === true)
    }
}

function cargarTareas (){
    let arrayTareas = []
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(i=0; i<3; i++){
                arrayTareas.push(new Tarea(`Tarea N° ${i}`))
            }
            if (arrayTareas.length === 3){
                resolve(arrayTareas)
            } else {
                reject("Hubo un problema en la carga de tareas")
            }
        }, 2000)
        
    })
}

async function iniciarFlujo(){
    try {
        const tareas = await cargarTareas()
        tareas.forEach(tarea => GestorTareas.tareas.push(tarea))
        console.log("Tareas cargadas correctamente")
        GestorTareas.listarTareas()
        GestorTareas.agregarTarea("Nueva Tarea - 21/09/2025")
        GestorTareas.listarTareas()
        GestorTareas.listarCompletadas()
    } catch (error) {
        console.log(error)
    }
    
}

iniciarFlujo()