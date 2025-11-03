import { renderLogin, manejarLogin } from "./login.js";
import { renderGeneralModule } from "./generalModule.js";
import { renderSistemasModule } from "./softwareModule.js";
import { renderMusicaModule } from "./musicModule.js";

const mainContent = document.getElementById("mainContent");

document.addEventListener("DOMContentLoaded", () => {
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (usuarioActivo) {
    mostrarModulos(usuarioActivo.rol);
  } else {
    mainContent.innerHTML = renderLogin();
    manejarLogin();
  }
});

export function mostrarModulos(rol) {
  mainContent.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="fw-bold text-primary">Bienvenido, ${rol.toUpperCase()}</h3>
      <button id="logoutBtn" class="btn btn-outline-danger btn-sm">Cerrar sesión</button>
    </div>
    <div id="moduleContainer"></div>
  `;

  const contenedor = document.getElementById("moduleContainer");

  renderGeneralModule(contenedor);

  if (rol === "sistemas") renderSistemasModule(contenedor);
  if (rol === "musica") renderMusicaModule(contenedor);

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    location.reload();
  });
}
