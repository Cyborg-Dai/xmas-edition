/*# Tarea clase 8

*Luego de mostrar EXITO, En 5 segundos vamos redireccionar al usuario a `wishlist.html`,
  usando `setTimeout` y `window.location.href`.
*borrar los campos adecuados segun los errores que tenga el form


A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/

//poner que no acepte sdigno nii letras
//poner que el campo no puede estar vvacio
//poner que el numero de quienes trabajan no puede ser mayor a la cantidad de integrantes

//Si la cantidad de integrantes se obtiene de un campo de formulario,  hacer la
//validación al enviar el formulario o antes de continuar a la siguiente operación.


/*# Tarea clase 8


A las 2 tareas de la clase 6, ponerles las validaciones que consideren
Necesarias (USANDO RegExp, Objetos, forEacch, poner estilos, mostrar los errores en la interfaz de usuario (nada de console.log)  y escribir pruebas)
TIP: Las edades no pueden tener decimales.
*/


// AGREGAR A LAS DOS TAREAS DE LA CLASE 6, LAS VALIDACIONES QUE CONSIDEREMOS NECESARIA (VALIDAR EDAD, VALIDAR NOMBRE) TODO CON REGULAR EXPRESION, CON OBJETOS,
//  FOREACH Y VAMOS A ESCRIBIR PRUEBAS 

// VAMOS A COPIAR DE LOS ARCHIVOS ORIGINALES Y LO VAMOS A PONER DENTRO DE ESTE OTRO REPOSITORIO NUEVO Y LO VAMOS A IR SUBIENDO AHÍ. LO SUBIMOS A GIHUB Y VAMOS 
// ARMANDO UN PULL REQUEST


function validarCantidadIntegrantes() {
    cantidadIntegrantes = Number(cantidadIntegrantes);
    //Validar que no sea 0
    if (cantidadIntegrantes === 0) {
        return "La cantidad de integrantes no puede ser 0";
    }
    // Validar que sea un número positivo
    if (cantidadIntegrantes < 0) {
        return "La cantidad de integrantes no puede ser un número negativo"
    }
    //Validar que no tenga más de 3 dígitos
    if (String(cantidadIntegrantes).length > 3){
        return "La cantidad de integrantes no puede tener más de 3 dígitos";
    }
    //validar que solo contenga números (sin letras ni símbolos)
    if(!/^[0-9])+$/.test(cantidadIntegrantes)) {
        return "La cantidad de integrantes debe contener solo números, sin letras ni símbolos";
    }

    return "";
    
}


function validarEdadIntegrantes() {
    edadIntegrantes = Number(cantidadIntegrantes);

    if (edadIntegrantes === 0) {
        return "La cantidad de integrantes no puede ser 0";
    }

    if (edadIntegrantes < 0) {
        return "La cantidad de integrantes no puede ser un número negativo"
    }

    if (String(edadIntegrantes).length > 3){
        return "La cantidad de integrantes no puede tener más de 3 dígitos";
    }

    if(!/^[1-9][0-9]{0,2}$/.test(edadIntegrantes)) {
        return "La cantidad de integrantes debe contener solo números, sin letras ni símbolos y no puede tener decimales";
    }

    return "";
    }

function validarCantidadSalarios(cantidadSalario) {
    cantidadSalario = Number(cantidadSalario);

    if (cantidadSalario === 0) {
        return "La cantidad de integrantes no puede ser 0";
    }

    if (cantidadSalario < 0) {
        return "La cantidad de integrantes no puede ser un número negativo"
    }

    if (String(cantidadSalario).length > 3) {
        return "La cantidad de integrantes no puede tener más de 3 dígitos";
    }

    if (!/^[0-9])+$/.test(String(cantidadSalario))) {
        return "La cantidad de integrantes debe contener solo números, sin letras ni símbolos";
    }

    return "";

    }


function validarSalarioIntegrante(salarioIntegrante) {
    salarioIntegrante = Number(salarioIntegrante);

    if (salarioIntegrante === 0) {
        return "El salario no puede ser 0";
    }

    if (salarioIntegrante < 0) {
        return "El salario no puede ser un número negativo"
    }

    if (String(salarioIntegrante).length > 7) {
        return "El salario no puede tener más de 7 dígitos";
    }

    if (!/^[0-9])+$/.test(String(salarioIntegrante))) {
        return "El salario debe contener solo números, sin letras ni símbolos";
    }

    return "";
    }

function validarFormularioEdades(event) {
    event.preventDefault();

    const $form = document.querySelector("#calculador-edades");

    const $edad = $form.edad.value; //chequear nombre de id 

    const errorEdad = validarEdadIntegrantes($edad);

    const errores = {
        edad: errorEdad;
    };

    const esExito = manejaErrores (errores) === 0;

    if(esExito) {
        mostrarTextoExito();
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

            const $error = document.createElement('li'); //chequear
            $error.innerText = error; 
            $errores.appendChild($error);
        }else{
            $form(key).className = "";
        }
    });

    return cantidadErrores;

}

function validarFormularioSalario(event) {
    event.preventDefault();

    const $form = document.querySelector("#calculador-edades");

    const $edad = $form.edad.value; //chequear nombre de id 

    const errorEdad = validarEdadIntegrantes($edad);

    const errores = {
        edad: errorEdad;
    };

    const esExito = manejaErrores (errores) === 0;

    if(esExito) {
        mostrarTextoExito();
    }

    event.preventDefault();
}

"calculador-salario"