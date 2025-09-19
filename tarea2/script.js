let hayMensaje = false
const form = document.querySelector("#formRegister")
form.addEventListener("submit", handlerEnvioRegistro)

function handlerEnvioRegistro(event) {
    event.preventDefault()
    const nombre = event.target.nombre.value
    const edad = event.target.edad.value

    const nuevoMensaje = document.createElement("p")
    if(edad >= 18){
        if (!hayMensaje){
            nuevoMensaje.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento`
            nuevoMensaje.classList.add("aprobado")
            nuevoMensaje.classList.add("mensaje")
            document.body.appendChild(nuevoMensaje)
            hayMensaje = true
        } else {
            const mensaje = document.querySelector(".mensaje")
            if(!mensaje.classList.contains("aprobado") && mensaje.classList.contains("denegado")){
                mensaje.classList.remove("denegado")
                mensaje.classList.add("aprobado")
                mensaje.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento`
            }
        }

    } else {
        if(!hayMensaje){
            nuevoMensaje.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad`
            nuevoMensaje.classList.add("denegado")
            nuevoMensaje.classList.add("mensaje")
            document.body.appendChild(nuevoMensaje)
            hayMensaje = true
        }
        else {
            const mensaje = document.querySelector(".mensaje")
            if(mensaje.classList.contains("aprobado") && !mensaje.classList.contains("denegado")){
                mensaje.classList.remove("aprobado")
                mensaje.classList.add("denegado")
                mensaje.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad`
            }
        }
    }
}