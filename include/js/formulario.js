var inputNombre = document.getElementById('nombre');
var error = document.getElementById('error');
var inputCorreo = document.getElementById('correo');
var errorCorreo =document.getElementById('errorCorreo');
var area = document.getElementById('area');
var errorMessage = document.getElementById('errorMessage');
var btnSent = document.getElementById('confirmar');

inputNombre.addEventListener('input', function(){
    if(inputNombre.value.length > 20 || inputNombre.value.length < 3){
        inputNombre.value = inputNombre.value.slice(0,20);
        error.hidden= false;
    }else{
        error.hidden= true;
    }
});

inputCorreo.addEventListener('input', function(){
    campo = document.getElementById('correo');       
    inputCorreoRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (inputCorreoRegex.test(campo.value)) {
      errorCorreo.hidden=true;
    } else {
      errorCorreo.hidden=false;
    }
});

area.addEventListener('input', function(){
    if(area.value.length < 2){
        errorMessage.hidden = false;
    }else{
        errorMessage.hidden = true;
    }
});

btnSent.addEventListener('submit', e=>{
    if(error.hidden === false || errorCorreo === false|| errorMessage === false){
        e.preventDefault();
    }
});