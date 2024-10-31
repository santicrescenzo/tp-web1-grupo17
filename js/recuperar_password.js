
function validarMail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
     
    return regex.test(email);
    
    }

  document.getElementById("formulario").addEventListener("submit", function (event){

    event.preventDefault();

    const EMAIL_INPUT=document.getElementById("correo");
    const mensaje=document.getElementById("msj");
    const EMAIL=EMAIL_INPUT.value;

    if(validarMail(EMAIL)){

        EMAIL_INPUT.style.borderColor="green"
        mensaje.style.display="none"
        
    }else{

        EMAIL_INPUT.style.borderColor="red"
        mensaje.textContent="Ingrese un e-mail valido";
        mensaje.style.color="red";
        mensaje.style.display="flex";
    }

    EMAIL_INPUT.value="";

  })  