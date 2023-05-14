
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//funcion para descargar el cv
function descargarCV(){
    window.open("cv/CV.pdf");
}

//funcion para enviar el formulario de contacto a mi correo "lilliam.solis.avila@gmail.com"
function enviarFormulario(){
    const btn = document.getElementById('button');
    document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Sending...';
      const serviceID = 'service_1tdm0q7';
      const templateID = 'template_n5gh64l';
      emailjs.sendForm(serviceID, templateID, this)
       .then(() => {
         btn.value = 'Send Email';
         Swal.fire({
           icon: 'success',
           title: '¡Mensaje enviado!',
           text: 'Gracias por contactarme, te responderé lo más pronto posible.',
           confirmButtonText: 'Aceptar',
           confirmButtonColor: '#3085d6',
         });
         this.reset();
       })
       .catch((err) => {
         btn.value = 'Send Email';
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Algo salió mal, inténtalo de nuevo.',
           confirmButtonText: 'Aceptar',
           confirmButtonColor: '#3085d6',
         });
       });
    });
  }
  
