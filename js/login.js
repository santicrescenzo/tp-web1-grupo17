
function validarMail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
     
    return regex.test(email);
    
    }
    
function validarPassword(password){
    
    const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    return regexPassword.test(password);
    
}

document.getElementById("formulario").addEventListener("submit", function (event){

    event.preventDefault(); //evita que se envie el formulario

    const EMAIL_INPUT=document.getElementById("correo");
    const msjMail=document.querySelector(".msjMail");
    const EMAIL=EMAIL_INPUT.value;

    if(validarMail(EMAIL)){

        msjMail.style.display="flex"
        msjMail.textContent="Correo valido";
        msjMail.style.color="green"
        EMAIL_INPUT.style.borderColor="green"

    }else{

        msjMail.style.display="flex"
        msjMail.textContent="Correo invalido"
        msjMail.style.color="red"
        EMAIL_INPUT.style.borderColor="red"
    }

    EMAIL_INPUT.value="";

    const PASSWORD_INPUT=document.getElementById("contraseña")
    const msjContraseña=document.querySelector(".msjContraseña");
    const PASSWORD= PASSWORD_INPUT.value;

    if(validarPassword(PASSWORD)){

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Contraseña valida";
        msjContraseña.style.color="green"
        document.getElementById("contenedor-password").style.borderColor="green"

        
    }else{

        msjContraseña.style.display="flex"
        msjContraseña.textContent="Ingrese una contraseña con una longitud de 8 a 12 caracteres y que contenga al menos una mayuscula, una minuscula, un numero y un caracter especial";
        msjContraseña.style.color="red"
        document.getElementById("contenedor-password").style.borderColor="red"
    }

    PASSWORD_INPUT.value=""
})