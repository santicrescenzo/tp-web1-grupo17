
// Validacion
function validarMail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
     
    return regex.test(email);

}

const correo = document.getElementById("correo");

function habilitacionBoton() {

    const emailCompletado = correo.value.trim() !== "";

    // Habilita el botón solo si el campo correo esta completado
    document.getElementById("boton-enviar").disabled = !(emailCompletado);
}

// Agrega el evento 'input' al campo correo
correo.addEventListener("input", habilitacionBoton);


document.getElementById("formulario").addEventListener("submit", function (event){

    event.preventDefault();

    const EMAIL_INPUT=document.getElementById("correo");
    let mensaje=document.getElementById("msj");
    let EMAIL=EMAIL_INPUT.value;

    // Mensajes segun si el campo es valido o no
    if(validarMail(EMAIL)){

        EMAIL_INPUT.style.borderColor="green"
        mensaje.style.display="flex"
        mensaje.textContent="Correo enviado";
        mensaje.style.color="green";
        
    }else{

        EMAIL_INPUT.style.borderColor="red"
        mensaje.textContent="Ingrese un e-mail valido";
        mensaje.style.color="red";
        mensaje.style.display="flex";
    }

    EMAIL_INPUT.value="";
    habilitacionBoton();
})  