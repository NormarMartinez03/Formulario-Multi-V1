let currentPage = 1;
let formData = {
  relatives: [],
  conditions: [],
  internments: []
};

function nextPage() {
  // Ocultar la página actual y mostrar la siguiente página
  document.getElementById(`page${currentPage}`).style.display = "none";
  currentPage++;
  document.getElementById(`page${currentPage}`).style.display = "block";
}

function addRelative() {
  // Agregar un familiar al objeto formData
  const relativeName = document.getElementById("relativeName").value;
  const relationship = document.getElementById("relationship").value;
  const relativeAge = document.getElementById("relativeAge").value;
  formData.relatives.push({ name: relativeName, relationship: relationship, age: relativeAge });
  document.getElementById("relativeName").value = "";
  document.getElementById("relationship").value = "";
  document.getElementById("relativeAge").value = "";
}

function addCondition() {
  // Agregar una condición al objeto formData
  const condition = document.getElementById("condition").value;
  const timeWithCondition = document.getElementById("timeWithCondition").value;
  formData.conditions.push({ condition: condition, timeWithCondition: timeWithCondition });
  document.getElementById("condition").value = "";
  document.getElementById("timeWithCondition").value = "";
}

function addInternment() {
  // Agregar un internamiento al objeto formData
  const date = document.getElementById("date").value;
  const medicalCenter = document.getElementById("medicalCenter").value;
  const diagnosis = document.getElementById("diagnosis").value;
  formData.internments.push({ date: date, medicalCenter: medicalCenter, diagnosis: diagnosis });
  document.getElementById("date").value = "";
  document.getElementById("medicalCenter").value = "";
  document.getElementById("diagnosis").value = "";
}

function showData() {
  // Mostrar los datos del formulario
  const summary = document.getElementById("summary");
  summary.innerHTML = "";
  summary.innerHTML += `<h2>Datos Personales</h2>`;
  summary.innerHTML += `<p>Nombre: ${document.getElementById("name").value}</p>`;
  summary.innerHTML += `<p>Apellido: ${document.getElementById("lastName").value}</p>`;
  summary.innerHTML += `<p>Edad: ${document.getElementById("age").value}</p>`;
  
  summary.innerHTML += `<h2>Familiares</h2>`;
  formData.relatives.forEach(relative => {
    summary.innerHTML += `<p>Nombre: ${relative.name}, Parentesco: ${relative.relationship}, Edad: ${relative.age}</p>`;
  });
  summary.innerHTML += `<h2>Condiciones Pre-Existentes de Salud</h2>`;
  formData.conditions.forEach(condition => {
    summary.innerHTML += `<p>Enfermedad: ${condition.condition}, Tiempo con la enfermedad: ${condition.timeWithCondition}</p>`;
  });
  summary.innerHTML += `<h2>Internamientos Realizados</h2>`;
  formData.internments.forEach(internment => {
    summary.innerHTML += `<p>Fecha: ${internment.date}, Centro Médico: ${internment.medicalCenter}, Diagnóstico: ${internment.diagnosis}</p>`;
  });
}