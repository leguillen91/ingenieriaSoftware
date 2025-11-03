export function renderMusicaModule(contenedor) {
  const section = document.createElement("section");
  section.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
      <button id="btnMostrarFormulario" class="btn btn-warning">Subir recurso</button>
    </div>

    <form id="formMusica" class="mb-4 border rounded p-3 bg-light" style="display: none;">
      <div class="row g-3">
        <div class="col-md-6">
          <input type="text" id="autor" class="form-control" placeholder="Autor" required>
        </div>
        <div class="col-md-6">
          <input type="text" id="titulo" class="form-control" placeholder="Título" required>
        </div>
        <div class="col-md-6">
          <input type="text" id="tag" class="form-control" placeholder="Tag" required>
        </div>
        <div class="col-md-6">
          <input type="file" id="recurso" class="form-control" multiple required>
        </div>
      </div>
      <button class="btn btn-warning mt-3" type="submit">Subir Recurso</button>
    </form>
    <div id="listaRecursosMusica"></div>
  `;

  contenedor.appendChild(section);

  const form = section.querySelector("#formMusica");
  const lista = section.querySelector("#listaRecursosMusica");
  const btnMostrar = section.querySelector("#btnMostrarFormulario");

  btnMostrar.addEventListener("click", () => {
    form.style.display = "block"; 
    btnMostrar.style.display = "none"; 
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    lista.innerHTML += `<div class="alert alert-success">Recurso musical subido correctamente.</div>`;
    form.reset();
  });
}
