var alumnos = [
    { nombre: 'Juan Gomez', nota: 7 },
    { nombre: 'Pedro Rodriguez', nota: 4 },
    { nombre: 'Roxana García', nota: 8 },
    { nombre: 'Luciano Lopez', nota: 5 },
    { nombre: 'Fernanda Gimenez', nota: 6 },
    { nombre: 'Florencia Martinez', nota: 10 },
    { nombre: 'Raul Sanchez', nota: 7 },
    { nombre: 'Sandra Figueroa', nota: 8 }
];

function mostrarAlumnosAprobados(alumnos) {
    var aprobados = alumnos.filter(function(alumno) {
        return alumno.nota >= 7;
    });

    var tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';  // Limpiar el contenido anterior

    aprobados.forEach(function(alumno) {
        var row = document.createElement('tr');
        row.classList.add('aprobado');
        
        var nombreCell = document.createElement('td');
        nombreCell.textContent = alumno.nombre;
        row.appendChild(nombreCell);

        var notaCell = document.createElement('td');
        notaCell.textContent = alumno.nota;
        row.appendChild(notaCell);

        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarAlumnosAprobados(alumnos);
});
