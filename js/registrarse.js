
function validarMail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
     
    return regex.test(email);
    
    }
    
function validarPassword(password){
    
    const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    return regexPassword.test(password);
    
}

document.getElementById("formulario").addEventListener("submit", function (event){

    event.preventDefault();

    const EMAIL_INPUT=document.getElementById("correo");
    const msjMail=document.getElementById("msjMail");

    if(validarMail(EMAIL_INPUT.value)){

        msjMail.style.display="none"
        msjMail.textContent="";
        EMAIL_INPUT.style.borderColor="grey";
    }else{

        EMAIL_INPUT.style.borderColor="red"
        msjMail.textContent="Correo invalido";
        msjMail.style.display="flex"
    }

    EMAIL_INPUT.value="";

    const CONTRASEÑA=document.getElementById("contraseña")
    const msjContraseña=document.getElementById("msjContraseña");

    if(validarPassword(CONTRASEÑA.value)){

        msjContraseña.textContent="";
        msjContraseña.style.display="none"

    }else{

        msjContraseña.textContent="Contraseña invalida";
        msjContraseña.style.display="flex"
    }

    CONTRASEÑA.value="";


})