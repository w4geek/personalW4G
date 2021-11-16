
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});

//Curso Básico de Javascript 22.- [Practica] Como validar un formulario sencillo
//Fuente: https://www.youtube.com/watch?v=VLFBHnkC-vc
        (function(){
            //Variables
            var formulario = document.getElementsByName('formulario')[0],
                elementos = formulario.elements,
                boton = document.getElementById('btn');

            var validarNombre = function(e){
                if (formulario.nombre.value == 0){
                    alert("Completa el campo nombre");
                    e.preventDefault();
                    //https://www.w3schools.com/jsref/event_preventdefault.asp
                    //Evita que un enlace abra la URL
                }
            };

            var validarRadio = function(e){
                if (formulario.sexo[0].checked == true || 
                    formulario.sexo[1].checked == true){
                } else{
                    alert("Completa el campo sexo");
                    e.preventDefault();
                }
            };
            
            var validarCheckbox = function(e){
                if (formulario.terminos.checked == false){
                    alert("Acepta los términos y condiciones");
                    e.preventDefault();
                }
            };

            var validar = function(e){
                validarNombre(e);
                validarRadio(e);
                validarCheckbox(e);
            };
            formulario.addEventListener("submit", validar);
        }())
    </script>