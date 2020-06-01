var nombre = document.getElementById('nombre');
var direccion = document.getElementById('direccion');
var email = document.getElementById('email');
var tel = document.getElementById('tel');
var comment = document.getElementById('comment');
var cot = document.getElementById('cot');
var error = document.getElementById('error');

function enviarFormulario(){

     var mensajesError=[];
    //Validar  usuario
    if(nombre.value.length  == null || nombre.value==''){
        error.innerHTML = 'No se ha ingresado un nombre!';
        document.getElementById("error").classList.add('chip');
        error.style.backgroundColor='#f44336';
        error.style.color='#ffffff';
    }
    else{
        error.innerHTML = '';
        error.style.backgroundColor='#ffffff';
        error.style.color='#ffffff';
    }
    if(direccion.value.length  == null || direccion.value==''){
        error1.innerHTML = 'No se ha ingresado una dirección!';
        document.getElementById("error1").classList.add('chip');
        error1.style.backgroundColor='#f44336';
        error1.style.color='#ffffff';
    }
    else{
        error1.innerHTML = '';
        error1.style.backgroundColor='#ffffff';
        error1.style.color='#ffffff';
    }
    if(email.value.length  == null || email.value==''){
        error2.innerHTML = 'No se ha ingresado un e-mail!';
        document.getElementById("error2").classList.add('chip');
        error2.style.backgroundColor='#f44336';
        error2.style.color='#ffffff';
    }
    else{
        error2.innerHTML = '';
        error2.style.backgroundColor='#ffffff';
        error2.style.color='#ffffff';
    }
    if(tel.value.length == null || tel.value==''){
        error3.innerHTML = 'No se ha ingresado un teléfono!';
        document.getElementById("error3").classList.add('chip');
        error3.style.backgroundColor='#f44336';
        error3.style.color='#ffffff';
    }
    else{
        error3.innerHTML = '';
        error3.style.backgroundColor='#ffffff';
        error3.style.color='#ffffff';
    }
    if(comment.value.length  == null || comment.value==''){
        error4.innerHTML = 'No se ha ingresado un comentario!';
        document.getElementById("error4").classList.add('chip');
        error4.style.backgroundColor='#f44336';
        error4.style.color='#ffffff';
    }
    else{
        error4.innerHTML = '';
        error4.style.backgroundColor='#ffffff';
        error4.style.color='#ffffff';
    }
    return false;
            


    
}
  