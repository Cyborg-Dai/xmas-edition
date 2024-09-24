function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("123123") === "El campo nombre sólo acepta letras",
    "Validar nombre no validó que el nombre solo enga letras"

  )

  console.assert(
    validarNombre('fabricio') === '',
    'validar nombre falló con un nombre válido'
  )
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo no debe estar vacío',
        'Validar ciudad no mostró un error cuando la ciudad es vacía'
    )
    console.assert (
        validarCiudad('Buenos Aires') === '',
        'validar ciudad no funciona con un nommbre de ciudad'
    );
};



function probarValidarDescripcionRegalo(){
    console.assert (
        validarDescripcionRegalo('llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll') === 'El campo de descripción es muy largo', //puse a modo de ejemmplo 100 caracteres  
        "La funcion validar descripción regalo no validó que el campo no sea muy largo"
    );

    console.assert(
        validarDescripcionRegalo("Regalo") === "", // tiene que ser esto
        "La función validar descripción regalo no funcionó con una descripción correcta "//<--pero si falla queremos que nos muestre esto
    )

    console.assert(
        validarDescripcionRegalo(",.,.,.,.,") === "El campo descripción sólo puede tener números y letras",
        "La función validar descripción regalo no validó que fuera sólo números y letras"
    )
}


probarValidarNombre;
probarValidarCiudad;
probarValidarDescripcionRegalo;


//Acordarse de correr las pruebas agregandolo al script del htmml
//console.assert, lo que hace en el primer parámmetro algo que sea verdadero o falso. Despu´´es de todo lo que tiene que hacer nos va a dar
//algo  maso o menos verdadero (thruty) o mas o menos falsy y el mensaje de error lo va a mostrar solo si el contenido es falso
//Si eso es falso significa que su prueba falló y si su prueba falló significa q su codigo tiene un error

//Hay que hacer validaciones con nommbres válidos, para ver q no nos de ningun tipo de error. Tenemos que ver klos happy case (caso feliz) o 
//el caso por default


//////////////////////////////////////////////////////////////////
//Este console.assert se fija que las cosas sean iguales

function sumar(a, b) {
    return a + b;
}

console.assert(sumar(1,2)===3, 'la suma de 1 + 1 no da 3');


//SIRVE POR SI ALGUIEN TE CAMBIA + POR - ASI TE DA EL AVISO 