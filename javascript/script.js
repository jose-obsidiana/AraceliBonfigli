

// let container = document.getElementById("container");

// //console.log(container.textContent)

// let mensajePersonas = ['homero', 'marge', 'bart', 'lisa', 'magie']

// for (const x of mensajePersonas) {
//     let lista = document.createElement("p")
//     lista.innerHTML = x
//     container.appendChild(lista)
// }



/*   SINTAXIS VIEJA (opcion 2)


let button = document.getElementById("form_button")

function mensajeEnviado() {
    alert('Tu mensaje ha sido enviado!')
}

button.onclick = () => {mensajeEnviado()} */



// SINTAXIS NUEVA (opcion 1)

// let button = document.getElementById("form_button")

// function mensajeEnviado() {
//     alert('Tu mensaje ha sido enviado!')
// }

// button.addEventListener('click', mensajeEnviado)





// GENERAR LA FUNCION DENTRO DEL EVENTO QUE QUIERO DISPARAR

// let boton = document.getElementById("form_button")

// boton.addEventListener( 'submit', () => {alert('Tu mensaje ha sido enviado!')} )



// MOSTRAR EN CONSOLA EN TIEMPO REAL LO QUE ESCRIBO
// let formulario = document.getElementById("contact_form")

// formulario.addEventListener("input", function(event) {
//     console.log(event.target.value)

// })



// ENVIAR FORMULARIO

// let formulario = document.getElementById("contact_form")

// formulario.addEventListener("submit", function(event) {

// event.preventDefault() // detiene el envio

//     if (event.target.value === null) {
//         alert('Te faltaron datos')
//     }

//     else {
//         alert('Tu mensaje ha sido enviado!')
//     }
// })




