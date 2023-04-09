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

//  seleccionamos los dos elementos que serán clickables

/*const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
/*toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

/*navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
*/
}}}

const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})