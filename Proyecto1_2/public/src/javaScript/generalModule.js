import { recursosGenerales } from "./data.js";

export function renderGeneralModule(contenedor) {
  const section = document.createElement("section");
  section.innerHTML = `<h4 class="text-success mb-3">📘 Módulo General</h4>`;

  const row = document.createElement("div");
  row.className = "row g-4";

  recursosGenerales.forEach((libro) => {
    row.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <img src="${libro.imagen}" class="card-img-top" alt="${libro.titulo}">
          <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
            <p class="card-text mb-1"><strong>Autor:</strong> ${libro.autor}</p>
            <p class="card-text mb-1"><strong>Editorial:</strong> ${libro.editorial}</p>
            <p class="card-text"><strong>Clase:</strong> ${libro.clase}</p>
          </div>
          <div class="card-footer text-center">
            <a href="${libro.link}" class="btn btn-outline-success btn-sm">Descargar</a>
          </div>
        </div>
      </div>`;
  });

  section.appendChild(row);
  contenedor.appendChild(section);
}
