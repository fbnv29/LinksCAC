// Configuración de elementos
// type: 'link' (botón clickeable) o 'info' (tarjeta informativa)
const items = [
    {
        type: 'link',
        title: "Registro Civil",
        subtitle: "Antecedentes / Pensión",
        url: "https://www.registrocivil.cl/principal/servicios-en-linea/",
        iconClass: "fa-solid fa-id-card"
    },
    {
        type: 'link',
        title: "Inhabilidades",
        subtitle: "",
        url: "https://inhabilidades.srcei.cl/ConsInhab/consultaInhabilidad.do",
        iconClass: "fa-solid fa-user-slash"
    },
    {
        type: 'info',
        title: "Curriculum",
        subtitle: "Recuerda enviar actualizado",
        iconClass: "fa-solid fa-file-user"
    },
    {
        type: 'info',
        title: "Títulos / Estudios",
        subtitle: "Recuerda enviar certificados",
        iconClass: "fa-solid fa-graduation-cap"
    }
];

const container = document.getElementById('links-container');

function createElements() {
    container.innerHTML = '';

    items.forEach(item => {
        let element;

        if (item.type === 'link') {
            // Crear enlace (Link activo)
            element = document.createElement('a');
            element.className = 'link-button';
            element.href = item.url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
            element.setAttribute('aria-label', `Ir a ${item.title}`);
        } else {
            // Crear tarjeta de información (Estático)
            element = document.createElement('div');
            element.className = 'info-card';
            element.setAttribute('aria-label', `Información: ${item.title}`);
        }

        // Icono
        const iconI = document.createElement('i');
        iconI.className = `link-icon ${item.iconClass}`;

        // Título
        const titleSpan = document.createElement('span');
        titleSpan.className = 'link-title';
        titleSpan.textContent = item.title;

        element.appendChild(iconI);
        element.appendChild(titleSpan);

        // Subtítulo (si existe)
        if (item.subtitle) {
            const subtitleSpan = document.createElement('span');
            subtitleSpan.className = 'subtitle'; // Clase para estilos específicos si se requiere
            if (item.type === 'link') {
                subtitleSpan.style.fontSize = "0.9rem";
                subtitleSpan.style.marginTop = "5px";
                subtitleSpan.style.fontWeight = "normal";
            }
            subtitleSpan.textContent = item.subtitle;
            element.appendChild(subtitleSpan);
        }

        container.appendChild(element);
    });
}

document.addEventListener('DOMContentLoaded', createElements);
