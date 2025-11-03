// Elementos del DOM
const verificarBtn = document.getElementById('verificarBtn');
const enviarBtn = document.getElementById('enviarBtn');
const identidad = document.getElementById('identidad');
const certificado = document.getElementById('certificado');
const registroForm = document.getElementById('registroForm');


verificarBtn.addEventListener('click', () => {
  let identidadValida = false;
  let imagenValida = false;

  const idValor = identidad.value.trim();
  if (/^\d{13}$/.test(idValor)) {
    identidadValida = true;
  } else {
    alert('La identidad debe tener exactamente 13 dígitos numéricos.');
  }

  const archivo = certificado.files[0];
  if (archivo) {
    const tipo = archivo.type;
    const tamanio = archivo.size; 

    if ((tipo === 'image/jpeg' || tipo === 'image/png') && tamanio <= 1048576) {
      const img = new Image();
      img.onload = () => {
        if (img.width > 0 && img.height > 0) {
          imagenValida = true;
          if (identidadValida && imagenValida) {
            alert('Datos verificados correctamente');
            enviarBtn.disabled = false;
          }
        } else {
          alert('La imagen no tiene dimensiones válidas.');
        }
      };
      img.src = URL.createObjectURL(archivo);
    } else {
      alert('El archivo debe ser JPG o PNG y pesar menos de 1 MB.');
    }
  } else {
    alert('Por favor, selecciona una imagen.');
  }

  if (!identidadValida || !imagenValida) {
    enviarBtn.disabled = true;
  }
});

// Envío del formulario
registroForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Información enviada correctamente.');
  registroForm.reset();
  enviarBtn.disabled = true;
});
