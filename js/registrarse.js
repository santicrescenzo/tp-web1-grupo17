
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

    event.preventDefault();

    const EMAIL_INPUT=document.getElementById("correo");
    let msjMail=document.getElementById("msjMail");

    // Mensajes segun si los campos son validos o no
    if(validarMail(EMAIL_INPUT.value)){

        msjMail.style.display="flex";
        msjMail.style.color="green";
        msjMail.textContent="Correo válido";
        EMAIL_INPUT.style.borderColor="green";
    }else{

        EMAIL_INPUT.style.borderColor="red";
        msjMail.textContent="Correo inválido";
        msjMail.style.display="flex";
        msjMail.style.color="red";
        EMAIL_INPUT.value="";
        habilitacionBoton();
    }


    const CONTRASEÑA=document.getElementById("contraseña")
    const msjContraseña=document.getElementById("msjContraseña");

    // Mensajes segun si los campos son validos o no
    if(validarPassword(CONTRASEÑA.value)){

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Contraseña valida";
        msjContraseña.style.color="green"
        document.getElementById("contenedor-password").style.borderColor="green"

    }else{

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Ingrese una contraseña con una longitud de 8 a 12 caracteres y que contenga al menos una mayuscula, una minuscula, un numero y un caracter especial";
        msjContraseña.style.color="red"
        document.getElementById("contenedor-password").style.borderColor="red"
        CONTRASEÑA.value="";
        habilitacionBoton();
    }

    if(validarMail(EMAIL_INPUT.value) && validarPassword(CONTRASEÑA.value)){
        EMAIL_INPUT.value="";
        CONTRASEÑA.value="";
        habilitacionBoton();
    }
})