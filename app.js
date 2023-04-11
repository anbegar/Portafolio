// seleccionamos todos los elementos de enlace del menú
const menuLinks = document.querySelectorAll(".menu a");

// agregamos un evento click a cada enlace del menú
menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener("click", function(event) {
    // prevenimos que se realice la acción predeterminada del enlace
    event.preventDefault();

    // removemos la clase "active" de todos los enlaces del menú
    menuLinks.forEach(function(menuLink) {
      menuLink.classList.remove("active");
    });

    // agregamos la clase "active" al enlace que se ha hecho clic
    this.classList.add("active");
  });
});


