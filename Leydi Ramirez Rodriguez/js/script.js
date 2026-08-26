function crearUsuario(nombre,apellido,pais,ciudad,tipo_documento,numero_de_identificacion,fecha_de_nacimiento,numero_de_celular,datos_personales){

const usuarioCreado = {
        id : Date.now(),
        nombreCompleto :`${nombre} ${apellido}`,
        LugarNacimiento : {
            pais: pais,
            ciudad: ciudad
        },
        documento : {
            tipo : tipo_documento,
            numero : numero_de_identificacion
        },
        fecha : fecha_de_nacimiento,
        numero : numero_de_celular,
        datospersonales : datos_personales,
        fechaRegistro: new Date().toLocaleDateString()
        
}

    return usuarioCreado
};

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {

    event.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const tipo_documento = document.getElementById('tipo_identificacion').value;
    const numero_de_identificacion = document.getElementById('numero_identificacion').value;
    const fecha_de_nacimiento = document.getElementById('fecha_nacimiento').value;
    const numero_de_celular = document.getElementById('celular').value;
    const datos_personales = document.getElementById('politica_datos').value;

    const usuarioGuardado = crearUsuario(nombre,apellido,pais,ciudad,tipo_documento,numero_de_identificacion,fecha_de_nacimiento,numero_de_celular,datos_personales);

    console.log('Registro Creado');

    const usuarioJSON = JSON.stringify(usuarioGuardado)
localStorage.setItem(usuarioGuardado.id,usuarioJSON);
})

let mensajeGlobal = "Hola mundo";

function accederGlobal() {
    return mensajeGlobal;
}

function scopeFuncion() {
    let secreto = "1234";
    return {secreto}
}

function scopeBloque() {
    if (true) {
        let mensajeBloque = "Este mensaje";
        return mensajeBloque;
    }
}




const resultadoGlobal = accederGlobal();
console.log(resultadoGlobal);
localStorage.setItem('reto1', JSON.stringify(resultadoGlobal));



const resultadoFuncion = scopeFuncion();
console.log(resultadoFuncion);
localStorage.setItem('reto2', JSON.stringify(resultadoFuncion.secreto));


 
const resultadoBloque = scopeBloque();
console.log(resultadoBloque);
localStorage.setItem('reto3', JSON.stringify(resultadoBloque));
