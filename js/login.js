
// Validaciones
function validarMail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
     
    return regex.test(email);
    
}
    
function validarPassword(password){
    
    const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    return regexPassword.test(password);
    
}

const correo = document.getElementById("correo");
const contrasenia = document.getElementById("contraseña");

function habilitacionBoton() {

    // Verifica si ambos campos tienen algún valor
    const emailCompletado = correo.value.trim() !== "";
    const contraseniaCompletada = contrasenia.value.trim() !== "";

    // Habilita el botón solo si ambos campos están llenos
    document.getElementById("boton-enviar").disabled = !(emailCompletado && contraseniaCompletada);
}

// Agrega el evento 'input' a ambos campos para monitorear los cambios
correo.addEventListener("input", habilitacionBoton);
contrasenia.addEventListener("input", habilitacionBoton);

document.getElementById("formulario").addEventListener("submit", function (event){

    event.preventDefault(); //evita que se envie el formulario

    const EMAIL_INPUT=document.getElementById("correo");
    let msjMail=document.querySelector(".msjMail");
    let email=EMAIL_INPUT.value;

    // Mensajes segun si los campos son validos o no
    if (validarMail(email)){

        msjMail.style.display="flex"
        msjMail.textContent="Correo válido";
        msjMail.style.color="green"
        EMAIL_INPUT.style.borderColor="green"

    }else{

        msjMail.style.display="flex"
        msjMail.textContent="Correo inválido"
        msjMail.style.color="red"
        EMAIL_INPUT.style.borderColor="red"
        EMAIL_INPUT.value="";
        habilitacionBoton();
    }

    

    const PASSWORD_INPUT=document.getElementById("contraseña")
    const msjContraseña=document.querySelector(".msjContraseña");
    const PASSWORD= PASSWORD_INPUT.value;
    
    
    // Mensajes segun si los campos son validos o no
    if(validarPassword(PASSWORD)){

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Contraseña valida";
        msjContraseña.style.color="green"
        document.getElementById("contenedor-password").style.borderColor="green"
    } else{

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Ingrese una contraseña con una longitud de 8 a 12 caracteres y que contenga al menos una mayuscula, una minuscula, un numero y un caracter especial";
        msjContraseña.style.color="red"
        document.getElementById("contenedor-password").style.borderColor="red"
        PASSWORD_INPUT.value="";
        habilitacionBoton();
    }

    if(validarMail(email) && validarPassword(PASSWORD)){
        EMAIL_INPUT.value="";
        PASSWORD_INPUT.value="";
        habilitacionBoton();
    }
})