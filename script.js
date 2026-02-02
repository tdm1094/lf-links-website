// Funciones de utilidad
function actualizarFechaCalendario() {
    const Dia = document.getElementById('dia');
    const Mes = document.getElementById('mes');
    if (Dia && Mes) {
        const fecha = new Date();
        Dia.innerText = fecha.getDate();
        const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
        Mes.innerText = meses[fecha.getMonth()];
    }
}

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) menu.classList.toggle('active');
}

// Función Maestra para cargar CSVs
async function cargarCSV() {
    const container = document.getElementById('wsp-groups-container');
    if (!container) return; // Si no existe el contenedor, no hace nada

    const archivo = container.getAttribute('data-csv');
    if (!archivo) return;

    try {
        const response = await fetch(archivo);
        const data = await response.text();
        const filas = data.split('\n').slice(1);

        container.innerHTML = ""; 

        filas.forEach(fila => {
            if (fila.trim() === "") return;
            const [materia, sigla, link] = fila.split(',');

            const card = document.createElement('a');
            card.href = link.trim();
            // Usamos card-wsp y bg-blue2 para que herede tus estilos de color y difuminado
            card.className = 'card-wsp bg-blue2'; 
            card.target = '_blank';
            card.style.setProperty('--bg-image', "url('images/generico.png')");

            card.innerHTML = `
                <div class="wsp-content">
                    <p class="wsp-materia">${materia.trim()}</p>
                    <h1 class="wsp-sigla">${sigla.trim()}</h1>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando el CSV:", error);
        container.innerHTML = "<p style='color:white; grid-column:1/-1; text-align:center;'>Próximamente...</p>";
    }
}

// Único evento de carga
document.addEventListener('DOMContentLoaded', () => {
    actualizarFechaCalendario();
    cargarCSV(); 
});