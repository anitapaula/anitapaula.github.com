
//DOM
//querySelector nos devuelve solo 1 elemento, el primero - querySelectorAll nos devuelve todos los elementos que encuentra en el sitio
/*
let links = document.querySelectorAll("a");

links.forEach (function(link){
  console.log(link);
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click',function(){
    console.log(this);
  })
});
*/

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link) {

  //Agregar un evento click a cada uno de ellos
  link.addEventListener('click', function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');


    //Quitarle las clases de animacion que ya tienen
    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");

    //Agregar clases para animar su salida fadeOutUp
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    //Retrasar el redirigir
    setTimeout(function(){
      location.href = "../index.html";
    },600);

    return false;

  });

});
