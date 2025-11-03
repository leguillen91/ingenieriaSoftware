const mainContent = document.getElementById("mainContent");

// Función para cargar archivos externos
function loadPage(filePath, cssPath) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      mainContent.innerHTML = html;

      // Eliminar CSS anterior
      const oldLink = document.getElementById("dynamicCSS");
      if (oldLink) oldLink.remove();

      // Agregar nuevo CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      link.id = "dynamicCSS";
      document.head.appendChild(link);
    })
    .catch(err => console.error("Error cargando archivo:", err));
}


document.getElementById("inscripcionesLink").addEventListener("click", () => {
  loadPage("./src/html/inscription.html", "./styles/inscription.css");
});

document.getElementById("resultadosLink").addEventListener("click", () => {
  loadPage("./src/html/results.html", "./styles/results.css");
});

document.getElementById("libraryLink").addEventListener("click", () => {
  window.location.href="./src/html/libraryS.html";
});