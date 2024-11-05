
const correo = document.getElementById("email");

function habilitacionBoton() {

    const emailCompletado = correo.value.trim() !== "";

    // Habilita el botón solo si el campo correo está lleno
    document.getElementById("guardar-usuario").disabled = !(emailCompletado);
}

// Agrega el evento 'input' a ambos campos para monitorear los cambios
correo.addEventListener("input", habilitacionBoton);


function validarMail(email){

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
   
  return regex.test(email);
  
}

function validarPassword(password){
    
  const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
  return regexPassword.test(password);
  
}

function validarNombre(nombre){

  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóú' -]+$/;
  return regexNombre.test(nombre);

}

function validarApellido(apellido){

  const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóú' -]+$/;
  return regexApellido.test(apellido);

}

function validarNroDocumento(nroDocumento){

  const regexNroDocumento = /^[0-9]+$/;
  return regexNroDocumento.test(nroDocumento);

}

function validarFechaNac(fechaNac){

  const regexFechaNac = /^\d{4}-\d{2}-\d{2}$/;

  if(regexFechaNac.test(fechaNac)){
    let fechaActual = new Date();
    
    let fechaNacimiento = new Date(fechaNac);
    
    let diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
    let aniosDeDiferencia = diferencia / 1000 / 60 / 60 / 24 / 365.25;

    if(aniosDeDiferencia <= 16){
      return false;
    } else{
      return true;
    }
  } else{
    return false;
  }

}

function validarTelefono(telefono){

  const regexTelefono = /^[\d()+-]+$/;
  return regexTelefono.test(telefono);

}

document.getElementById("formulario-usuario").addEventListener("submit", function (event){

  event.preventDefault(); //evita que se envie el formulario

  const EMAIL_INPUT=document.getElementById("email");
  let msjMail=document.querySelector(".msjMail");
  let email=EMAIL_INPUT.value;

  if (validarMail(email)){
    document.getElementById("usuario").style.height = "338px";
    msjMail.style.display="flex";
    msjMail.textContent="Correo válido";
    msjMail.style.color="green";
    EMAIL_INPUT.style.borderColor="green";

  } else{
      document.getElementById("usuario").style.height = "338px";
      msjMail.style.display="flex";
      msjMail.textContent="Correo inválido";
      msjMail.style.color="red";
      EMAIL_INPUT.style.borderColor="red";
      email="";
      habilitacionBoton();
}
})


document.getElementById("formulario-datos-personales").addEventListener("submit", function (event){

  event.preventDefault(); //evita que se envie el formulario

  const NOMBRE_INPUT=document.getElementById("nombre");
  let msjNombre=document.querySelector(".msjNombre");
  let nombre=NOMBRE_INPUT.value;

  if (validarNombre(nombre)){
    document.getElementById("datos-personales").style.height = "790px";
    msjNombre.style.display="flex";
    msjNombre.textContent="Nombre válido";
    msjNombre.style.color="green";
    NOMBRE_INPUT.style.borderColor="green";
  } else{
    document.getElementById("datos-personales").style.height = "790px";
    msjNombre.style.display="flex";
    msjNombre.textContent="Nombre inválido";
    msjNombre.style.color="red";
    NOMBRE_INPUT.style.borderColor="red";
    nombre="";
    habilitacionBoton();
  }



  const APELLIDO_INPUT=document.getElementById("apellido");
  let msjApellido=document.querySelector(".msjApellido");
  let apellido=APELLIDO_INPUT.value;

  if (validarApellido(apellido)){
    msjApellido.style.display="flex";
    msjApellido.textContent="Apellido válido";
    msjApellido.style.color="green";
    APELLIDO_INPUT.style.borderColor="green";
  } else{
    msjApellido.style.display="flex";
    msjApellido.textContent="Apellido inválido";
    msjApellido.style.color="red";
    APELLIDO_INPUT.style.borderColor="red";
    apellido="";
    habilitacionBoton();
  }



  const TIPO_DOC_INPUT=document.getElementById("tipo");
  let msjTipoDoc=document.querySelector(".msjTipoDoc");
  let tipoDoc=TIPO_DOC_INPUT.value;

  if (tipoDoc != ""){
    msjTipoDoc.style.display="flex";
    msjTipoDoc.textContent="Tipo de documento válido";
    msjTipoDoc.style.color="green";
    TIPO_DOC_INPUT.style.borderColor="green";
  } else{
    msjTipoDoc.style.display="flex";
    msjTipoDoc.textContent="Tipo de documento inválido";
    msjTipoDoc.style.color="red";
    TIPO_DOC_INPUT.style.borderColor="red";
    tipoDoc="";
    habilitacionBoton();
  }



  const NRO_DOC_INPUT=document.getElementById("nro_doc");
  let msjNroDoc=document.querySelector(".msjNroDoc");
  let nroDoc=NRO_DOC_INPUT.value;

  if (validarNroDocumento(nroDoc)){
    msjNroDoc.style.display="flex";
    msjNroDoc.textContent="Número de documento válido";
    msjNroDoc.style.color="green";
    NRO_DOC_INPUT.style.borderColor="green";
  } else{
    msjNroDoc.style.display="flex";
    msjNroDoc.textContent="Número de documento inválido";
    msjNroDoc.style.color="red";
    NRO_DOC_INPUT.style.borderColor="red";
    nroDoc="";
    habilitacionBoton();
  }


  const FECHA_NAC_INPUT=document.getElementById("fecha_de_nacimiento");
  let msjFechaNac=document.querySelector(".msjFechaNac");
  let fechaNac=FECHA_NAC_INPUT.value;

  if (validarFechaNac(fechaNac)){
    msjFechaNac.style.display="flex";
    msjFechaNac.textContent="Fecha de nacimiento válida";
    msjFechaNac.style.color="green";
    FECHA_NAC_INPUT.style.borderColor="green";
  } else{
    msjFechaNac.style.display="flex";
    msjFechaNac.textContent="Fecha de nacimiento inválida";
    msjFechaNac.style.color="red";
    FECHA_NAC_INPUT.style.borderColor="red";
    fechaNac="";
    habilitacionBoton();
  }




  const CELULAR_INPUT=document.getElementById("nro_celular");
  let msjTelefono=document.querySelector(".msjTelefono");
  let celular=CELULAR_INPUT.value;

  if (validarTelefono(celular)){
    msjTelefono.style.display="flex";
    msjTelefono.textContent="Teléfono celular válido";
    msjTelefono.style.color="green";
    CELULAR_INPUT.style.borderColor="green";
  } else{
    msjTelefono.style.display="flex";
    msjTelefono.textContent="Teléfono celular inválido";
    msjTelefono.style.color="red";
    CELULAR_INPUT.style.borderColor="red";
    celular="";
    habilitacionBoton();
  }



  const EMAIL_INPUT=document.getElementById("email_secundario");
  let msjMail=document.querySelector(".msjMailSecundario");
  let email=EMAIL_INPUT.value;

  if (validarMail(email)){
    msjMail.style.display="flex";
    msjMail.textContent="Correo válido";
    msjMail.style.color="green";
    EMAIL_INPUT.style.borderColor="green";

  } else{
      msjMail.style.display="flex";
      msjMail.textContent="Correo inválido";
      msjMail.style.color="red";
      EMAIL_INPUT.style.borderColor="red";
      email="";
      habilitacionBoton();
}
})

