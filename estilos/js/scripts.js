// Variable para determinar si el usuario es administrador
const isAdmin = true; // Cambia a `false` para probar sin permisos
const adminSection = document.querySelector(".admin-info");
const btnActualizar = document.getElementById("btnActualizar");

// Ocultar la sección de administrador al inicio
adminSection.style.display = "none";

// Evento para alternar la visibilidad de la sección de administrador
btnActualizar.addEventListener("click", function () {
    if (isAdmin) {
        if (adminSection.style.display === "none") {
            adminSection.style.display = "block";
        } else {
            adminSection.style.display = "none";
        }
    } else {
        alert("No tienes permisos para ver esta sección.");
    }
});

// Función para la animación de la lista de tareas
window.onload = function() {
    var listaTareas = document.getElementById('listaTareas');

    // Añadir la animación
    listaTareas.classList.add('slide-animation');
    
    // Después de 3 segundos, quitar la transición
    setTimeout(function() {
        listaTareas.style.transition = 'none';
        listaTareas.style.transform = 'translateY(0)';
        listaTareas.style.opacity = '1';
    }, 3000); // 3 segundos de espera
};
    