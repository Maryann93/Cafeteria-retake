function validar_formulario(){

    if(document.getElementById('Nombre').value.length < 2 ){

        todo_correcto = false;

    if(document.getElementById('correo').value.length < 3 ){

    todo_correcto = false;

    if(document.getElementById('telefono').value.length < 3 ){

        todo_correcto = false;
}

var expresion = [a-zA-Z0-9];

var mail = document.form.email.value;

    if (!expresion.test(mail)){

        todo_correcto = false;

}

var texto = document.getElementById('Mensaje').value;

    if(texto==''){

        alert("El textarea no puede estar vacío")

}
}}}
