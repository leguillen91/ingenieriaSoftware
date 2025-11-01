const gradeForm = document.getElementById('notaForm');
const gradeResult = document.getElementById('gradeResult');

const testGrades = {
  "1006200000123": { name: "Javiary Ramos", grade: 87 },
  "0801200100456": { name: "María López", grade: 92 }
};

gradeForm.addEventListener('submit', e => {
  e.preventDefault();
  const idValue = document.getElementById('identityGrade').value.trim();
  gradeResult.innerHTML = "";

  if (!/^\d{13}$/.test(idValue)) {
    gradeResult.innerHTML = `<div class="alert alert-warning">⚠️ La identidad debe tener exactamente 13 dígitos numéricos.</div>`;
    return;
  }

  const user = testGrades[idValue];
  if (user) {
    gradeResult.innerHTML = `
      <div class="alert alert-success text-start">
        <strong>Resultado encontrado:</strong><br>
        Nombre: ${user.name}<br>
        Nota obtenida: <strong>${user.grade}</strong> / 100
      </div>
    `;
  } else {
    gradeResult.innerHTML = `<div class="alert alert-danger">❌ No se encontró ningún registro con ese número de identidad.</div>`;
  }
});
