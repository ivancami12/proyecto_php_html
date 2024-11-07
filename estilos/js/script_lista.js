document.getElementById("generate-button").addEventListener("click", () => {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = ""; // Limpiamos la lista antes de agregar nuevas tareas

  // Generar 10 tareas
  for (let i = 0; i < 10; i++) {
    const tarea = document.createElement("li");
    tarea.classList.add("list-group-item");

    // Genera una descripción de tarea falsa y agrega "Tarea: " al principio
    const nombreTarea = `Tarea: ${faker.hacker.phrase()}`;

    // Asigna el nombre al elemento de la lista
    tarea.textContent = nombreTarea;

    // Agrega el elemento de tarea a la lista
    listaTareas.appendChild(tarea);
  }
});
