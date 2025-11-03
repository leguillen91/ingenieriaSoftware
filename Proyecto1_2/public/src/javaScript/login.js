import { usuarios } from "./data.js";
import { mostrarModulos } from "./main.js";

export function renderLogin() {
  return `
    <style>
        body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f2f5;
        }

        .card h4.text-primary {
        color: #111 !important;
        }

        .card {
        border-radius: 20px;
        }

        #loginForm .btn {
        width: 66%;      
        display: block;  
        margin: 0 auto;  
        background-color: #012566;
        color: white;
        padding: 0.5rem 1.2rem;
        border-radius: 15px;
        font-size: 1.1rem;
        width: 5rem;
        }

   </style>
  <div class="card shadow-sm mx-auto mt-5" style="max-width: 400px;">
    <div class="card-body">
      <h4 class="text-center mb-4 text-primary ">Iniciar Sesión</h4>
      <form id="loginForm">
        <div class="mb-3">
          <label for="username" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="username" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Ingresar</button>
      </form>
    </div>
  </div>`;
}

export function manejarLogin() {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const usuario = usuarios.find(
      (u) => u.username === user && u.password === pass
    );

    if (usuario) {
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      mostrarModulos(usuario.rol);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}
