// const nombre = document.getElementById("name")
// const email = document.getElementById("email")
// const consulta = document.getElementById("consulta")
// const form = document.getElementById("form")
// const parrafo = document.getElementById("warnings")
// //escucha del submit ,e es para default,
// form.addEventListener("submit", e=> {
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     parrafo.innerHTML = "" //para que se reincie
//     if (nombre.value.length <3) {
//         warnings += `Nombre invalido <br> `
//         entrar= true
//     }
//     // console.log(regexEmail.test(email.value)) //para ver valores booleanos en consola
//     if(!regexEmail.test(email.value)){
//         //si no es email.value da falso
//         warnings += `El email no es valido <br> `
//         entrar= true
//     }
//     if (consulta.value.length > 150){
//         warnings += `Utilice maximo 150 caracteres<br> `
//         entrar= true
//     }
//     if (entrar){
//         parrafo.innerHTML = warnings
//     }
// })

//expresiones regulares: sacadas de w3source.com

// Primero selecciono todos los elementos html a nivel global para poder manipularlos
const formulario = document.getElementById("form");

const formName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const sede = document.querySelector(".select");
const consult = document.getElementById("consult");
const warnings = document.getElementById("warnings");

// Armo la función que se va a ejecutar cuando asigne un evento
function validateForm() {
  if (
    // 1. Bloque condición -Le digo que si los values de los campos del formulario tienen los siguientes valores al momento de ejecutar la función:
    // 2. Bloque ejecución si se cumple la condición - agregue "Por favor, complete todos los campos"
    name.value === "" ||
    email.value === "" ||
    tel.value === "" ||
    sede.value === "Elige tu sede" ||
    consult.value === ""
  ) {
    warnings.innerHTML = "Por favor, complete todos los campos";
    return false;
  }
}

// Le indico al código que escuche el evento submit del formulario. Recordar que si dentro del form tenés un botón de type="submit", se entiende que el evento se va a disparar al momento de hacer click en ese botón
formulario.addEventListener("submit", e => {
  //   Indico que el primer comportamiento al momento de hacer submit sea justamente ignorar el submit, sino va a recargar la página apenas demos click en el botón
  e.preventDefault();
  // Le digo que al momento de hacer submit, ejecute la función validateForm
  validateForm();
});
