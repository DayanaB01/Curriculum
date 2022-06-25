var inputNombre = document.getElementById('nombre');
var error = document.getElementById('error');
var inputCorreo = document.getElementById('correo');
var errorCorreo =document.getElementById('errorCorreo');

inputNombre.addEventListener('input', function(){
    if(this.value.length > 20){
        this.value = this.value.slice(0,20);
    } 
    if (this.value.length < 3){
        error.hidden= false;
    }else{
        error.hidden= true;
    }
});

inputCorreo.addEventListener('input', function(){
    var campo = EventTarget;       
    inputCorreoRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (inputCorreoRegex.test(campo.value)) {
      errorCorreo.hidden=false;
    } else {
      errorCorreo.hidden=true;
    }
});
