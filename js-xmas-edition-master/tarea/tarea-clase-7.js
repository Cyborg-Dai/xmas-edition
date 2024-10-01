/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

function validarNombre(nombre) {
    if(nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }if(/^[a-z]+$/i.test(nombre)) {
        return "El campo solo debe contener letras"
    }
}

function validarCiudad() {
    if(ciuadad.legth === 0) {
        return "Este campo está vacío"
    }
    if(nombre.length >= 20){
        return "Este campo debe tener menos de 20 caracteres";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo.length === 0) {
        return "Este campo no puede estar vacío";
    }
    if(descripcionRegalo.length >= 50) {
        return "El campo descripcion regalo debe contener menos de 50 caracteres";
    }
    if(/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripción regalo debe contener solo numeros y letras"; // Con la i: /^[a-z0-9]+$/i coincide tanto con minúsculas como con mayúsculas (a-z o A-Z) y números (0-9). EJ: ABC123, abc123, y AbC123
    }
    return"";
}
function redirigirAWishList() {
    window.location.href = "wishlist.html";
}

function validarFormulario(event) {
    event.preventDefault(); //Evitar el envío del formulario por defecto

    const $form = document.querySelector("carta-a-santa");

    const $nombre = $form.nombre.value;
    const $ciudad = $form.ciudad.value;
    const $descripcionRegalo = $form["descripcion-regalo"].value; 

    const errorNombre = validarNombre($nombre);
    const errorCiudad = validarCiudad($ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo($descripcionRegalo);

    const errores = { //objeto
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };

const esExito = manejaErrores(errores) === 0;

if(esExito) {
    mostrarTextoExito();
    ocultarFormulario();
    const tiempoDeEspera = setTimeout(redirigirAWishList, 5000);
}

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    $errores.innerHTML = ''; //Limpiar mmensajes de errores anteriores
    let cantidadErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];
        const $input = document.querySelector(`[name="${key}"]`);

        if (error) {
            cantidadErrores++; //CHEQUEAR
            $form[key].className = "error"

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }else{
            $form(key).className = "";
        }
    });

    return cantidadErrores;

}

function ocultarFormulario() {
    const $form = document.querySelector("#carta-a-santa");
    $form.className = "oculto";
}

function mostrarMensajeExito() {
    const $exito=document.querySelector('#exito');
    $exito.className = "";

    
}

const $form = documentt.querySelectoor('#carta-a-santa');
$form.onsubmit = validarFormulario;